# Generated by Django 4.1.7 on 2023-03-11 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='')),
                ('nome', models.CharField(max_length=20)),
                ('size', models.FloatField()),
            ],
        ),
    ]
