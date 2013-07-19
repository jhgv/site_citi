from django.http import HttpResponse
from django.shortcuts import render
from models import Contato
from models import Newsletter
from models import Slide
from django.core.mail import send_mail

def home(request):
	slides = Slide.objects.all()

	if request.method == 'POST':

		if ('contato' in request.POST):
			contato = Contato()
			contato.nome = request.POST['nome']
			contato.email = request.POST['email']
			contato.mensagem = request.POST['mensagem']
			contato.save()
			# send_mail('[Email]',contato.mensagem,contato.email,['joaohg.veras@gmail.com'])
			send_mail(
	           '[Contato Site] '+contato.nome,
	           contato.mensagem+ "\n\n\n[E-mail para contato: "+contato.email+" ]",
	           contato.email,
	           ['joaoveras.dev@gmail.com'],
            )

		if ('newsletter' in request.POST):
			newsletter = Newsletter()
			newsletter.nome_news = request.POST['nomenews']
			newsletter.email_news = request.POST['emailnews']
			newsletter.save()

	return render(request,'index.html',locals())
