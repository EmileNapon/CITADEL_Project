# Generated by Django 4.2 on 2023-10-18 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeData', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='texttext',
            name='audioURL',
            field=models.CharField(max_length=255),
        ),
    ]