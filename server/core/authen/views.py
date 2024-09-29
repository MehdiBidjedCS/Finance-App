from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated
import rest_framework.status as status
from rest_framework.views import APIView
from .serializers import  RegisterSerializer



 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def secret(request) : 
    return Response({"shmed" : 12},status=status.HTTP_200_OK)


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)