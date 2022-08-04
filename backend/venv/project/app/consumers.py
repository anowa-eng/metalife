from datetime import datetime
import json
from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer

from .models import *

def group_name_of(room_consumer):
    room_id = room_consumer.scope['url_route']['kwargs']['id']

    group_name = f'room-{room_id}'
    return group_name
    
class RoomConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()

        self.group_name = group_name_of(self)
        await self.channel_layer.group_add(self.group_name, self.channel_name)
    
    async def disconnect(self, code):
        self.channel_layer.group_discard(self.group_name, self.channel_name)
        await self.close(code)

    async def receive_json(self, content):
        await self.channel_layer.group_send(self.group_name, content)

    # Room events
    async def join(self, content):
        user_name = (await sync_to_async(User.objects.get)(id=content['user_id'])).username
        room_name = self.group_name
        date = datetime.now()
        print(f'{user_name} joined the room {room_name} at {date}')

    async def move(self, content):
        user_name = (await sync_to_async(User.objects.get)(id=content['user_id'])).username
        room_name = self.group_name
        date = datetime.now()
        new_position = content['new_position']

        x = new_position['x']
        y = new_position['y']

        ordered_pair_string = f'({x}, {y})'

        print(f'{user_name} moved to {ordered_pair_string} in {room_name} at {date}')
