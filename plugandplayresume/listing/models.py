from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class ListingInfo(models.Model):
    owner = models.ForeignKey(
        User, related_name="listingInfo", on_delete=models.CASCADE, null=True)
    listingTitle = models.TextField()
    listing = models.TextField()
    listingKeywords = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
