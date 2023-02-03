from .models import *
from django_grpc_framework import generics
from .serializers import UserInRoomDataProtoSerializer

class RoomService(generics.ModelService):
    queryset = UserInRoomData.objects.all()
    serializer_class = UserInRoomDataProtoSerializer