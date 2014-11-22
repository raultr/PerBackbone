# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0002_auto_20141119_0447'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogodetalle',
            name='num_dcatalogo',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
    ]
