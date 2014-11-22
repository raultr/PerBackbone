# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0004_auto_20141120_0214'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalogodetalle',
            name='udc_catalogo',
            field=models.CharField(default=b'', max_length=7),
            preserve_default=True,
        ),
    ]
