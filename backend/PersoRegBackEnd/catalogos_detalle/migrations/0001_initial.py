# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from decimal import Decimal


class Migration(migrations.Migration):

    dependencies = [
        ('catalogos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CatalogoDetalle',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('num_dcatalogo', models.IntegerField()),
                ('descripcion1', models.CharField(max_length=255)),
                ('descripcion2', models.CharField(max_length=255, blank=True)),
                ('monto1', models.DecimalField(default=Decimal('0.00'), max_digits=18, decimal_places=2)),
                ('monto2', models.DecimalField(default=Decimal('0.00'), max_digits=18, decimal_places=2)),
                ('udc_default', models.CharField(max_length=7)),
                ('catalogos', models.ForeignKey(to='catalogos.Catalogo')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
