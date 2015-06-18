function scrollTo(destino){
	$('html, body').animate({
        scrollTop: $(destino).offset().top
    }, 2000);
}

function abrirImagen(origen){
	var preview = $(origen).attr('src');
	var img = 'assets/Uploads/' + preview.substring(preview.indexOf('-')+1);

	$('<img>').load(function(){
			$(origen).addClass('ampliado');
			Materialize.fadeInImage($(origen).attr('src',img));
		})
		.attr('src',img)
		.each(function() {
			// fail-safe for cached images which sometimes don't trigger "load" events
			if(this.complete){
				$(this).load();
			}
		});
}

function retirarEspacios(texto){
	return texto.replace(/\s/g, '');
}

function nuevaSeccion(contenido,clase){
	var seccion = $('<section>').appendTo('#contenido');
	if(clase){
		seccion.addClass(clase);
	}

	return $('<div>').addClass('col m12')
		.html(contenido? contenido : '')
		.appendTo(
			$('<div>').addClass('container').appendTo(seccion)
		);
}

function tituloSeccion(texto,icono){
	var titulo = $('<h3>').html(texto);
	if(icono){
		titulo.addClass('center-align')
			.prepend('<i class="' + icono + ' large grey-text"></i><br>')
	}
	return titulo;
}

function tarjetasPor3(contenido,destino,clase){
	var tarjeta = $('<div>')
		.addClass('card-panel' + (clase? (' ' + clase) : ''))
		.html(contenido);
	
	$('<div>').addClass('col m12 l4')
		.html(tarjeta)
		.appendTo(destino);

	return tarjeta;
}