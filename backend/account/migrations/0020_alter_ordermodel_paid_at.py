# Generated by Django 3.2.4 on 2021-06-29 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0019_auto_20210626_2106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='paid_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]