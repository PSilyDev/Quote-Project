from django.db import models

# Create your models here.
class Quote(models.Model):
    text = models.TextField()                   # for storing the quote text

    author = models.CharField(max_length=255)   # for storing the author's name

    genre = models.CharField(max_length=100, default="General")    # for storing the quote's genre (Philosophy, Motivation, ...)

    image = models.URLField(blank=True, null=True)    # URL for the author's image

    def __str__(self):  
        return f'"{self.text}" - {self.author}'