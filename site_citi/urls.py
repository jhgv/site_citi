from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'home.views.home'),
    # url(r'^site_citi/', include('site_citi.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^$','home.views.home'),
    # url(r'^$','home.views.submeter'),
    url(r'^admin/', include(admin.site.urls)),
)
