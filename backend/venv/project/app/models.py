from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=250)
    password = models.TextField()
class UserProfile(models.Model):
    profile_picture = models.ImageField(upload_to='media/')
