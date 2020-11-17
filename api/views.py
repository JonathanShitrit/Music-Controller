from api.models import Room
from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# Create your views here.
# All of our endpoints go here


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
