# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0006_auto_20141120_0258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogodetalle',
            name='udc_catalogo',
            field=models.CharField(default=b'0000000', unique=True, max_length=7, editable=False),
            preserve_default=True,
        ),
    ]
