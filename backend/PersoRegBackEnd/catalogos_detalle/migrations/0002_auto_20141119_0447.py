# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogodetalle',
            name='udc_default',
            field=models.CharField(max_length=7, blank=True),
            preserve_default=True,
        ),
    ]
