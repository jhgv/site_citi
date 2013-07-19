from django.db import models

class Slide(models.Model):

	nome = models.CharField(max_length=50)
	descricao = models.CharField(max_length=50)
	imagem = models.CharField(max_length=30)

	def __unicode__(self):
		return self.nome
    
class Contato(models.Model):
    nome = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    mensagem = models.TextField()

    def __unicode__(self):
        return self.nome

class Newsletter(models.Model):

    nome_news = models.CharField(max_length=50)
    email_news = models.CharField(max_length=50)

    def __unicode__(self):
        return self.nome_news