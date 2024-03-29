# Generated by Django 4.2 on 2023-11-15 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TextText',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('french', models.TextField(unique=True)),
                ('moore', models.TextField()),
                ('date_saisie', models.DateTimeField(auto_now_add=True)),
                ('nouvellesDonnees', models.BooleanField(default=False)),
                ('audioURL', models.TextField()),
            ],
        ),
    ]
