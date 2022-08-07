from datetime import datetime
import json
import re
from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import *

def group_name_of(room_consumer):
    room_id = room_consumer.scope['url_route']['kwargs']['id']

    group_name = f'room_{room_id}'
    return group_name
    
class RoomConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = group_name_of(self)
        await self.channel_layer.group_add(self.group_name, self.channel_name)

        await self.accept()
    
    async def disconnect(self, code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)
        await self.close(code)

    async def receive(self, text_data=None):
        await self.channel_layer.group_send(self.group_name, {'type': 'testing', 'msg': 'hi'})

    # Room events
    async def join(self, event):
        user_name = (await sync_to_async(User.objects.get)(id=event['user_id'])).username
        room_name = self.group_name
        date = datetime.now()
        print(f'{user_name} joined the room {room_name} at {date}')

    async def move(self, event):
        user_name = (await sync_to_async(User.objects.get)(id=event['user_id'])).username
        room_name = self.group_name
        date = datetime.now()
        new_position = event['new_position']

        x = new_position['x']
        y = new_position['y']

        ordered_pair_string = f'({x}, {y})'

        print(f'{user_name} moved to {ordered_pair_string} in {room_name} at {date}')
    
    async def direction_change(self, event):
        user_name = (await sync_to_async(User.objects.get)(id=event['user_id'])).username
        room_name = self.group_name

        degrees = event['new_direction']

        print(f'{user_name}\'s direction changed to {degrees}\u00b0')

    # Test
    async def testing(self, event):
        print(event['msg'])
    