from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.TextField()

    def __str__(self):
        return self.username
class UserProfile(models.Model):
    profile_picture = models.ImageField(upload_to='media/', null=True, blank=True)

    user = models.ForeignKey(User, on_delete=User)

class Room(models.Model):
    name = models.CharField(max_length=255)

    private = models.BooleanField()

    def __str__(self):
        return self.name
class InvitedUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
class UserPosition(models.Model):
    x = models.PositiveBigIntegerField()
    y = models.PositiveBigIntegerField()
class UserInRoom(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    user_position = models.ForeignKey(UserPosition, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} in {self.room.name}'
    class Meta:
        verbose_name_plural = 'users in rooms'
