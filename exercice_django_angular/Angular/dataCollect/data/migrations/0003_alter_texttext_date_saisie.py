# Generated by Django 4.2 on 2023-09-14 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_texttext_date_saisie'),
    ]

    operations = [
        migrations.AlterField(
            model_name='texttext',
            name='date_saisie',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
