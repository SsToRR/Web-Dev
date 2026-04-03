from django.shortcuts import render
from django.http import JsonResponse

from .models import Book

# Create your views here.
def book_list(request):
    books = Book.objects.all()
    data = [{'id': book.id, 'title': book.title, 'author': book.author} for book in books]
    return JsonResponse(data, safe=False)

def book_detail(request, id):
    book = Book.objects.get(id=id)
    book.is_seen = True
    book.save()
    data = {'id': book.id, 'title': book.title, 'author': book.author, 'pages': book.pages, 'is_available': book.is_available, 'is_seen': book.is_seen}
    return JsonResponse(data)