// $(window.document).ready(function(){ blablabla }
window.onload=function(){
	
	// Funções do slideshow
	$('#imagens').cycle({
		fx:'scrollHorz',
		prev:"#prev",
		next:"#next",
		pager:"#imgpager",

		pagerAnchorBuilder: function(idx, slide) { 
        	return '<li><a href="#"><img src="' + slide.src + '" width="152" height="80" /></a></li>'; 
    	} 

	});

	$('#imagens').mouseenter(function(){
		$(this).cycle('pause');
	});

	$('#imagens').mouseleave(function(){
		$(this).cycle('resume');
	});
	// Fim do slideshow


	//Validação dos formulários

	$('#btn1').click(function(){

		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();
		var mensagem = $('textarea').val();
		var valido = true;

		if(nome =='' || nome ==null){
			$("#alerta1").html('Porfavor, informe seu nome').slideDown();
			valido = false;
			
		}
		if(email =='' || email ==null){
			$("#alerta2").html('Campo \'e-mail\' deve ser preenchido').slideDown();
			valido = false;
			
		}
		if(mensagem =='' || mensagem ==null){
			$("#alerta3").html('Campo \'mensagem\' deve ser preenchido').slideDown();
			valido = false;
			
		}

		return valido;

	});


	$('#btn2').click(function(){

		var nome = $('input[name=nomenews]').val();
		var email = $('input[name=emailnews]').val();
		var valido = true;

		if(nome =='' || nome ==null){
			$("#alertanome").html('Porfavor, informe seu nome').slideDown();
			valido = false;
		}
		if(email =='' || email ==null){
			$("#alertaemail").html('Campo \'e-mail\' deve ser preenchido').slideDown();
			valido = false;
		}

		return valido;

	});
	//Fim da validação do form

	//Após a validação a mensagem deve sumir quando tiver foco em cada input

		//No form de contato:
	$("input[name=nome]").focus(function(){
		if($("#alerta1").html()	 != '' && $("#alerta1").html() != null){
			$("#alerta1").slideUp();
		}
	});
	$("input[name=email]").focus(function(){
		if($("#alerta2").html()	 != '' && $("#alerta2").html() != null){
			$("#alerta2").slideUp();
		}
	});
	$("textarea").focus(function(){
		if($("#alerta3").html()	 != '' && $("#alerta3").html() != null){
			$("#alerta3").slideUp();
		}
	});



		//No form da newsletter:
	$("input[name=nomenews]").focus(function(){
		if($("#alertanome").html()	 != '' && $("#alertanome").html() != null){
			$("#alertanome").slideUp();
		}
	});
	$("input[name=emailnews]").focus(function(){
		if($("#alertaemail").html()	 != '' && $("#alertaemail").html() != null){
			$("#alertaemail").slideUp();
		}
	});


}