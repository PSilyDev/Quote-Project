# Generated by Django 5.1.4 on 2025-03-02 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quotes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='quote',
            name='genre',
            field=models.CharField(default='General', max_length=100),
        ),
        migrations.AddField(
            model_name='quote',
            name='img',
            field=models.URLField(blank=True, null=True),
        ),
    ]
