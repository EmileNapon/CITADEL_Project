# Generated by Django 4.2 on 2023-09-14 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_alter_texttext_date_saisie'),
    ]

    operations = [
        migrations.AddField(
            model_name='texttext',
            name='nouvellesDonnees',
            field=models.BooleanField(default=False),
        ),
    ]