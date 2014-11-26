# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos_detalle', '0007_auto_20141120_0343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalogodetalle',
            name='catalogos',
            field=models.ForeignKey(related_name='catalogos_detalle', to='catalogos.Catalogo'),
            preserve_default=True,
        ),
    ]
