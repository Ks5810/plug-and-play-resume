# Generated by Django 2.2.6 on 2019-11-06 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0003_auto_20191106_0019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experienceinfo',
            name='experienceType',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
