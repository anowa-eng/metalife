from django.shortcuts import render

from django.http import HttpResponse

from .models import *

# Create your views here.
def index_view(req):
    return render(req, 'index.html')

def current_room(req):
    current_room = req.session.get('current_room')
    return HttpResponse(current_room if current_room else '')
def get_initial_room_data(req):
    current_room = req.session.get('current_room')

    room_object_list = Room.objects.filter(pk=current_room)
    if room_object_list:
        room_object = room_object_list[0]

        room_users = UserInRoom.objects.filter(room=room_object)
        user_positions = list(map(
            lambda room_user: room_user.user_position,
            room_users
        ))

        # Create initial data dictionary
        initial_data = []
        for room_user in room_users:
            def user_position_mapping_function(user_position):
                user_in_position = user_position.user
                user_of_room = room_user.user

                return user_in_position == user_of_room
            user_position = list(filter(
                user_position_mapping_function,
                room_user
            ))[0]
            user_id = room_user.user.id

            user_data = {
                'position': user_position,
                'user': dict(user)
            }
            initial_data.append(user_data)
    else:
        initial_data = []

    return HttpResponse(json.dumps(initial_data))
