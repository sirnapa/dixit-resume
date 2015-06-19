/*  Curriculum Vitae  */

function mostrarCV(){
	
	$('<div>').attr('id','contacto')
		.addClass('container white-text center-align')
		.appendTo(
			$('<header>').addClass('indigo-degradado valign-wrapper')
				.css('min-height',$(window).outerHeight())
				.appendTo('#contenido')
		);
	$('#source h2').addClass('col m10').prependTo('#contacto');
	$('#source ul li').each(function(l,li){
		var a = $(li).find('strong').first();
		var key = $.trim(a.text());
		a.remove();
		switch(key)
		{
			case 'Encabezado':
				$('<p>').addClass('col m10 flow-text')
				.css('margin-top',0)
				.html($(li).html())
				.appendTo('#contacto');
	  			break;
	  		case 'Avatar':
	  			var img = $(li).find('img').first();
				var imgContainer = $('<div>').addClass('avatar').prependTo('#contacto');
				$('<img>').load(function(){
						try{
							var img = $(this)[0];
							var colorThief = new ColorThief();
							var color = colorThief.getColor(img);
							$('header').css('background-color',
							           'rgb('+
							           color[0] + ',' +
							           color[1] + ',' +
							           color[2] + ')' )
								.removeClass('indigo-degradado');
						}catch(e){
						  $('header').addClass('indigo-degradado');
						}
					})
					.addClass('circle responsive-img no-print')
					.appendTo(imgContainer)
					.attr('src',img.attr('src'))
					.each(function() {
						// fail-safe for cached images which sometimes don't trigger "load" events
						if(this.complete){
							$(this).load();
						}
					}).before('<br>');
	  			break;
	  		case 'Email':
	  			var mail = $(li).html();
	  			$('<p>').html('<i class="mdi-communication-email"></i> ' + mail)
	  				.appendTo('#contacto');
  				$('#btn-escribir').attr('href','mailto:'+mail);
	  			$('#btn-escribir').parent().removeClass('hide');
	  		 	break;
	  		case 'Teléfono':
	  			var telefono = $(li).html();
	  			$('<p>').html('<i class="mdi-action-settings-phone"></i> ' + telefono)
	  				.appendTo('#contacto');
	  			$('#btn-llamar').attr('href','tel:'+retirarEspacios(telefono));
	  			$('#btn-llamar').parent().removeClass('hide');
	  			break;
	  		case 'Perfil':
	  			var seccion = $('<div>')
	  				.addClass('card-panel amber lighten-4')
		  			.html($(li).html());
	  			seccion.find('a').addClass('pink-text');
	  			nuevaSeccion(seccion).prepend(tituloSeccion('Perfil','mdi-action-assignment-ind'));
	  			break;
	  		case 'Habilidades':
	  			var colores = ['green','light-green','lime'];
	  			var habilidades = nuevaSeccion(tituloSeccion('Habilidades','mdi-action-assignment'));
	  			habilidades.addClass('row');

	  			$(li).find('ul li').each(function(h,habilidad){
	  				var titulo = $(habilidad).find('strong').first();
	  				titulo.after($('<h5>').addClass('center-align').html(titulo.html()));
	  				titulo.remove();
	  				tarjetasPor3($(habilidad).html(),habilidades,colores[h%colores.length]+' lighten-4');
	  			});

	  			habilidades.find('a').addClass('pink-text');

	  			break;
	  		case 'Herramientas':
		  		var herramientas = nuevaSeccion(tituloSeccion('Herramientas','mdi-editor-border-color'),'red darken-2 white-text');
	  			herramientas.addClass('row');
	  			$('<br>').appendTo(herramientas);

	  			var ul, nuevaColumna = function(){
	  				return $('<ul>').addClass('lista')
	  				.appendTo(
	  					$('<div>').addClass('col m4 s12')
							.appendTo(herramientas)
  					);
	  			};

	  			var items = $(li).find('ul li');
	  			var cantidadPorColumna = Math.ceil(items.length/3);

	  			$.each(items,function(i,item){
	  				if((i%cantidadPorColumna)==0){
	  					ul = nuevaColumna();
	  				}
					$('<i class="mdi-navigation-check"></i>').prependTo(item);
		  			$(item).appendTo(ul);
	  			});

	  			herramientas.find('a').addClass('white-text').append(' <i class="mdi-action-open-in-new"></i>');
	  			herramientas.find('h3 i').removeClass('grey-text').addClass('white-text');

	  			break;
	  		case 'Experiencia':
	  			var colores = ['purple','deep-purple','indigo'];
	  			var experiencia = nuevaSeccion(tituloSeccion('Experiencia','mdi-action-wallet-travel'));

	  			experiencia.addClass('row');
	  			$(li).find('ul li').each(function(i,item){
	  				tarjetasPor3($(item).html(),experiencia,colores[i%colores.length]+' lighten-4');
	  			});
	  			break;
	  		case 'Formación':
	  			var formacion = nuevaSeccion(tituloSeccion('Formación','mdi-social-school'),'blue-grey lighten-5');
	  			formacion.addClass('row');

	  			$(li).find('ul li').each(function(i,item){
	  				tarjetasPor3($(item).html(),formacion);
	  			});
	  			break;
	  		 case 'Trabajos':
	  		 	var trabajos = nuevaSeccion(tituloSeccion('Galería de Trabajos','mdi-image-photo'));
	  			var galeria = $('<div>').attr('id','galeria').appendTo(trabajos);
	  			var fila, nuevaFila = function(){
	  				return $('<div>').addClass('row').appendTo(galeria);
	  			};
	  		 	$(li).find('img').each(function(i,img){
	  		 		if((i%3)==0){
	  					fila = nuevaFila();
	  				}
	  		 		$(img).removeAttr('class')
						.removeAttr('width')
						.removeAttr('height')
						.addClass('responsive-img');
	  		 		var descripcion = $(img).next('p.caption');
  					var tarjeta = tarjetasPor3($('<div>').addClass('card-image').html(img),fila);
	  		 		if(descripcion && !descripcion.is(':empty')){
	  		 			descripcion.removeAttr('class').addClass('center-align');
	  		 			$('<div>').addClass('card-content')
	  		 				.html(descripcion)
	  		 				.appendTo(tarjeta);
	  		 		}
	  		 		tarjeta.removeClass('card-panel')
	  		 			.addClass('card')
	  		 			.materialbox()
	  		 			.click(function(){
	  		 				var img = $(this).find('img');
	  		 				if(!img.hasClass('ampliado')){
		  		 				abrirImagen(img);
	  		 				}
	  		 			});
	  		 	});
	  		 	break;
	  		default:
	  			//console.log(key);
	 	}
	});

	$('<a>').addClass('white-text')
		.attr('href','Javascript:void(0);')
		.html('<i class="mdi-navigation-expand-more medium"></i>')
		.appendTo(
			$('<div>').addClass('bounce').appendTo('#contacto')
		)
		.click(function(){
			scrollTo($('section').first());
		});

	$('#source').remove();
	$('#cargando').fadeOut();
	$('#contenido').hide().removeClass('hide').fadeIn();
	$('footer').hide().removeClass('hide').fadeIn();

	bodyResize();
}

