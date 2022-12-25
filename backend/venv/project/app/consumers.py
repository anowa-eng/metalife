from djangochannelsrestframework.generics import GenericAsyncAPIConsumer
from djangochannelsrestframework import permissions
from djangochannelsrestframework.decorators import action, database_sync_to_async
from djangochannelsrestframework.observer import observer

from asgiref.sync import sync_to_async

from .signals import *

from .serializers import *
from .models import *

class RoomConsumer(GenericAsyncAPIConsumer):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    async def accept(self, **kwargs):
        await super().accept()
        await self.handle_join_signal.subscribe()
    
    async def disconnect(self, code):
        await self.leave_room()

        await self.remove_subscribing_request_id()

        await super().disconnect(code)

    @action()
    async def join(self, action, request_id, room_id=1, initial_position=None, user_id=None):
        request_id_object = await self.create_subscribing_request_id(request_id, room_id)

        user_in_room = await self.create_user_in_room(room_id, initial_position, user_id)
        user_in_room_id = user_in_room.id

        self.scope['session']['request_id'] = request_id_object.id
        self.scope['session']['user_in_room_id'] = user_in_room_id

        await sync_to_async(self.scope['session'].save)()

        request_id_objects = await self.get_subscribing_request_ids_for(room_id)
        subscribing_request_ids = list(map(lambda obj: obj.request_id, request_id_objects))

        join_signal.send(self.__class__, room_id=room_id, initial_position=initial_position, user_id=user_id)

        return {}, 200
    
    @observer(join_signal)
    def handle_join_signal(self, message, observer, **kwargs):
        print('test')

    @database_sync_to_async
    def create_subscribing_request_id(self, request_id, room_id):
        room = self.get_object(pk=room_id)
        request = SubscribingRequest.objects.create(
            request_id=request_id,
            room=room
        )

        return request
    
    @database_sync_to_async
    def remove_subscribing_request_id(self):
        request_id = self.scope['session']['request_id']
        print(request_id)

        subscribing_request = SubscribingRequest.objects.get(pk=request_id)

        subscribing_request.delete()
    
    @database_sync_to_async
    def get_subscribing_request_ids_for(self, room_id):
        queryset = self.get_object(pk=room_id).subscribingrequest_set.all()
        return list(queryset)

    @database_sync_to_async
    def create_user_in_room(self, room_id, initial_position, user_id):
        user_in_room_data = UserInRoomData.objects.create(
            x=initial_position['x'],
            y=initial_position['y'],
            direction=0
        )

        user = User.objects.get(pk=user_id)
        room = self.get_object(pk=room_id)

        user_in_room = UserInRoom.objects.create(
            user=user,
            room=room,
            data=user_in_room_data
        )

        return user_in_room

    @database_sync_to_async
    def leave_room(self):
        user_in_room_id = self.scope['session']['user_in_room_id']

        user_in_room = UserInRoom.objects.get(pk=user_in_room_id)
        user_in_room_data = user_in_room.data

        user_in_room_data.delete()
        user_in_room.delete()
