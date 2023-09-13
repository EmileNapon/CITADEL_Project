from django.urls import path
from .views import CreateTextTextView,get_all_texttexts


urlpatterns = [
    # ... vos autres vues ...
    path('post1', CreateTextTextView.as_view(), name='create_texttext'),
    path('get1', get_all_texttexts, name='get'),
]
