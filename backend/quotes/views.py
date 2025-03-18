from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Quote
from .serializers import QuoteSerializer
import random
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET
# Create your views here.

@api_view(["GET"])
def quote_list(request):
    # returns the list of all quotes
    quotes = Quote.objects.all()
    serializer = QuoteSerializer(quotes, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def random_quote(request):
    # returns a single random quote
    count = Quote.objects.count()
    if count == 0:
        return Response({"error" : "No quotes found"}, status=404)
    
    # else pick a random index
    random_index = random.randint(0, count-1)
    quote = Quote.objects.all()[random_index]
    serializer = QuoteSerializer(quote)
    return Response(serializer.data)

@api_view(["GET"])
def search_quotes(request):
    # search quotes by author name
    #  example: /api/quotes/search/?author=Mark

    author = request.GET.get('author', None)
    if author:
        quotes = Quote.objects.filter(author__icontains=author)
        serializer = QuoteSerializer(quotes, many=True)
        return Response(serializer.data)

    return Response({"error": "Author query parameter is required"}, status=400)