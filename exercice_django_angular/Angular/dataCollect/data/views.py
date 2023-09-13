from django.http import JsonResponse
from rest_framework import generics
from .models import TextText
from .serializers import TextTextSerializer

class CreateTextTextView(generics.CreateAPIView):
    queryset = TextText.objects.all()
    serializer_class = TextTextSerializer


# GET OF TEXT.TEXT
def get_all_texttexts(request):       
    if request.method=='GET':
        texttexts = TextText.objects.all()
        data = [{'french': text.french, 'moore': text.moore} for text in texttexts]
        return JsonResponse(data, safe=False)


