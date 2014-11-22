# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0003_auto_20141119_0540'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogodetalle',
            name='num_dcatalogo',
            field=models.IntegerField(default=0, help_text=b'clave consecutiva del detalle del catalogo'),
            preserve_default=True,
        ),
    ]
