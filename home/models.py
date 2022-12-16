from django.conf import settings
from django.db import models
class Base_Table(models.Model):
    'Generated Model'
    oid = models.BigIntegerField()
    description = models.TextField(null=True,blank=True,)
    dateChanged = models.DateTimeField(null=True,blank=True,)
