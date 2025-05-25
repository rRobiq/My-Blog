from django.shortcuts import render, HttpResponse
from .models import Post
from django.shortcuts import get_object_or_404, render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def chatbot(request):
    return render(request, 'chatbot.html')

def form(request):
    return render(request, 'form.html')

def gallery(request):
    return render(request, 'gallery.html')

def liluzi(request):
    return render(request, 'liluzi.html')

def MyPlaylist(request):
    return render(request, 'MyPlaylist.html')

def MyTop(request):
    return render(request, 'MyTop.html')

def playboicarti(request):
    return render(request, 'playboicarti.html')

def youngthug(request):
    return render(request, 'youngthug.html')

def index(request):
    posts = Post.objects.all()
    return render(request, 'index.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post_detail.html', {'post': post})
