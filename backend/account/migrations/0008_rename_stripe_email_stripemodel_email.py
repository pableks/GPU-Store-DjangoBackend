# Generated by Django 3.2.4 on 2021-06-19 14:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_rename_email_stripemodel_stripe_email'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stripemodel',
            old_name='stripe_email',
            new_name='email',
        ),
    ]
