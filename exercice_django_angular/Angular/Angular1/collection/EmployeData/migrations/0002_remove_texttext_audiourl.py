# Generated by Django 4.2 on 2023-11-15 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeData', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='texttext',
            name='audioURL',
        ),
    ]