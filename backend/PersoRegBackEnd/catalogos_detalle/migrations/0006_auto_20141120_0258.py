# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0005_catalogodetalle_udc_catalogo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogodetalle',
            name='udc_catalogo',
            field=models.CharField(default=b'0000000', unique=True, max_length=7),
            preserve_default=True,
        ),
    ]
