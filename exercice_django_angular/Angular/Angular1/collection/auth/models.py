from django.db import models

# Create your models here.

# Create your models here.
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    user_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']
