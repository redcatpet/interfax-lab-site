from django.contrib import admin
from django.contrib.auth.models import User, Group

from .models import Publication, PublicationTab


admin.site.unregister(User)
admin.site.unregister(Group)


class PublicationInline(admin.TabularInline):
    model = Publication


@admin.register(PublicationTab)
class PublicationTabAdmin(admin.ModelAdmin):
    inlines = [
        PublicationInline
    ]

