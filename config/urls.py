"""config URL Configuration"""

from django.contrib import admin
from django.conf.urls import include
from django.urls import re_path


from accounts import urls as accounts_urls
from frontend import urls as frontend_urls
from listing import urls as listing_urls
from resume import urls as resume_urls

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^api/', include(accounts_urls)),
    re_path(r'^api/', include(resume_urls)),
    re_path(r'^api/', include(listing_urls)),
    re_path(r'^.*', include(frontend_urls)),
]
