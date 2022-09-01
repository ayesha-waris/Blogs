from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import LoginSerializer, RegisterSerializer, UserSerializer

# generating token manually


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class RegisterApiView(APIView):
    def post(self, request, format=None):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.create_user(
            serializer.validated_data['username'], serializer.validated_data['email'], serializer.validated_data['password'])
        user.first_name = serializer.validated_data['first_name']
        user.last_name = serializer.validated_data['last_name']
        user.is_staff = True
        user.save()
        token = get_tokens_for_user(user)
        return Response({'token': token, 'response': 'Registration Successful'})


class LoginApiView(APIView):

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            login(request, user)
            return Response({'token': token, 'response': 'Login successful'})
        return Response({'response': 'Email or Password invalid'})


class LogoutApiView(APIView):

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response('User Logged out successfully')
