from rest_framework.serializers import serializers

from .models import *

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
class UserPositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPosition

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'user_in_room']

class InvitedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvitedUser
class UserInRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInRoom
