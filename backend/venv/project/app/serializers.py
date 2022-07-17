from rest_framework import serializers, fields

from .models import *

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('name', 'private')
class UserInRoomDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInRoomData
        fields = ('x', 'y', 'direction')

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('avatar',)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'id')

class InvitedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvitedUser
        fields = ('user', 'room')
class UserInRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInRoom
        fields = ('user', 'room', 'data')
