from djangochannelsrestframework.generics import GenericAsyncAPIConsumer
from djangochannelsrestframework import permissions
from djangochannelsrestframework.decorators import action, database_sync_to_async

from .serializers import RoomSerializer
from .models import *

class RoomConsumer(GenericAsyncAPIConsumer):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    room_id = None
    user_in_room_id = None

    async def accept(self, **kwargs):
        await super().accept()
    
    async def disconnect(self, code):
        await self.remove_user_from_room()
        await super().disconnect(code)

    @action()
    async def join(self, action, request_id, room_id=None, initial_position=None, user_id=None):
        user_in_room = await self.create_user_in_room(room_id, initial_position, user_id)
        self.scope['session']['user_in_room_id'] = user_in_room.id

    @database_sync_to_async
    def create_user_in_room(self, room_id, initial_position, user_id):
        user_in_room_data = UserInRoomData.objects.create(
            x=initial_position['x'],
            y=initial_position['y'],
            direction=0
        )

        user = User.objects.get(pk=user_id)
        room = self.get_object(pk=room_id)
        
        return UserInRoom.objects.create(
            user=user,
            room=room,
            data=user_in_room_data
        )

    @database_sync_to_async
    def remove_user_from_room(self):
        user_in_room_id = self.scope['session']['user_in_room_id']

        user_in_room = UserInRoom.objects.get(pk=user_in_room_id)
        user_in_room_data = user_in_room.userinroomdata_set.all()

        user_in_room_data.delete()
        user_in_room.delete()
