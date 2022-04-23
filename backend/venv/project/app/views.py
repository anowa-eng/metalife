from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.
def index_view(req):
    return render(req, 'index.html')
def current_room(req):
    current_room = req.session.get('current_room')
    return HttpResponse(current_room if current_room else '')
