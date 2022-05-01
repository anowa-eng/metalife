from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.TextField()
class UserProfile(models.Model):
    profile_picture = models.ImageField(upload_to='media/')

    user = models.ForeignKey(User, on_delete=User)

class Room(models.Model):
    name = models.CharField(max_length=255)
class InvitedUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
class UserPosition(models.Model):
    x = models.PositiveBigIntegerField()
