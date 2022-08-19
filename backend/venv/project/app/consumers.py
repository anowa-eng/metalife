from djangochannelsrestframework.generics import GenericAsyncAPIConsumer
from djangochannelsrestframework import permissions
from djangochannelsrestframework.observer import model_observer
from djangochannelsrestframework.decorators import action, database_sync_to_async
from rest_framework import status

from .serializers import RoomSerializer

from .models import *
    
class RoomConsumer(GenericAsyncAPIConsumer):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = (permissions.IsAuthenticated,)

    @action()
    async def join(self, initial_position, user_id):
        self.join_room_as(user_id)
    
    @database_sync_to_async
    async def join_room_as(self, initial_position, user_id):
        room_id = self.scope['url_route']['kwargs']['id']

        user = User.objects.get(pk=user_id)
        room = Room.objects.get(pk=room_id)

        user_in_room_data = UserInRoomData.objects.create(**initial_position, direction=0)
        user_in_room = UserInRoom.objects.create(
            user=user,
            room=room,
            data=user_in_room_data
        )
    
    @model_observer()
    