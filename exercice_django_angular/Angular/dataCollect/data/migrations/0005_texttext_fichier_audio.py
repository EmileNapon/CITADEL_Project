# Generated by Django 4.2 on 2023-10-16 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_texttext_nouvellesdonnees'),
    ]

    operations = [
        migrations.AddField(
            model_name='texttext',
            name='fichier_audio',
            field=models.BinaryField(default=0),
        ),
    ]
