# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos', '0003_auto_20141120_0416'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalogo',
            name='url_icono',
            field=models.CharField(default=b'', max_length=255, blank=True),
            preserve_default=True,
        ),
    ]
