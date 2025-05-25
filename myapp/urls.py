from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('form/', views.form, name='form'),
    path('gallery/', views.gallery, name='gallery'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('liluzi/', views.liluzi, name='liluzi'),
    path('MyPlaylist/', views.MyPlaylist, name='MyPlaylist'),
    path('MyTop/', views.MyTop, name='MyTop'),
    path('playboicarti/', views.playboicarti, name='playboicarti'),
    path('MyTop/', views.MyTop, name='MyTop'),
    path('youngthug/', views.youngthug, name='youngthug'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
]
