from djangochannelsrestframework.consumers import AsyncAPIConsumer
from djangochannelsrestframework import permissions
from djangochannelsrestframework.observer import model_observer, observer
from djangochannelsrestframework.decorators import action, database_sync_to_async

from .serializers import RoomSerializer
from . import signals
from .models import *
    
class RoomConsumer(AsyncAPIConsumer):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    async def accept(self):
        self.handle_joined_room_signal.subscribe(self)
        return await super().accept()

    @action()
    def join(self, request_id, initial_position=None, user_id=None):
        signals.joined_room_signal.send('join', initial_position=initial_position, user_id=user_id)

        return {'test': 'hello'}, 200

    @observer(signals.joined_room_signal)
    def handle_joined_room_signal(self, initial_position, user_id, observer=None, subscribing_request_ids=[]):
        for request_id in subscribing_request_ids:
            self.reply('msg', {'test': 'hello'}, status=200, request_id=request_id)

    @handle_joined_room_signal.groups_for_consumer
    def joined_room_signal_groups_for_consumer(self):
        room_id = self.scope['url_route']['kwargs']['id']
        yield f'room-{room_id}'

    @database_sync_to_async
    def get_room(pk):
        return Room.objects.get(pk=pk)
    
    @database_sync_to_async
    def join_room_as():
        pass
    

    