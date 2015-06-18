function bodyResize(){
	// Header a pantalla completa
	$('<header>').css('min-height',$(window).outerHeight());
	// Alto de elementos de la galería
	$('#galeria').find('.row').each(function(f,fila){
		var mayor = 0;
		var galeriaItems = $(fila).find('.card-content');
		$.each(galeriaItems,function(c,card){
			var actual = $(card).outerHeight();
			if(actual>mayor){
				mayor = actual;
			}
		});
		galeriaItems.css('height',mayor);
	});
	// Alto de otras tarjetas
	$('.row').each(function(r,row){
	  var tarjetas = $(row).find('.card-panel');
	  if(tarjetas.length>1){
	    var mayor = 0;
		$.each(tarjetas,function(c,card){
			var actual = $(card).outerHeight();
			if(actual>mayor){
				mayor = actual;
			}
		});
		tarjetas.css('height',mayor);
	  }
	});
}