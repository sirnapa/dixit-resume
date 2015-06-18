<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]-->
<head>
	<% base_tag %>
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags(false)
	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
  <link rel="stylesheet" type="text/css" href="$ThemeDir/css/equipo.css">
  <link rel="shortcut icon" href="$ThemeDir/favicon.ico" />
  <!-- JavaScript -->
  <script src="$ThemeDir/js/librerias.js"></script>
</head>
<body class="$ClassName<% if not $Menu(2) %> no-sidebar<% end_if %>">
	<% if URLSegment = 'inicio' %>
		<script>
			window.open('http://dixit.com.py/#/equipo','_self');
		</script>
		<div class="container">
			<h1 class="content center-align dixit">
				<a href="http://dixit.com.py">
					Equipo <strong class="dixit-logo">diXit</strong>
				</a>
				<hr>
			</h1>
			<% include Navigation %>
		</div>
	<% else_if URLSegment = 'Security' %>
		<div class="container">
			$Layout
		</div>
	<% else %>
		<div id="cargando" class="blue-text fa-lg">
			<i class="fa fa-5x fa-spin fa-circle-o-notch"></i>
		</div>
		<article id="contenido" class="hide">
			<!-- Acá se carga el contenido generado por el script cv.js -->
		</article>
		<div id="source" class="hide">
			$Layout
		</div>
		<div class="fixed-action-btn">
			<a class="btn-floating btn-large red" href="Javascript:void(0);">
			  <i class="large mdi-action-perm-phone-msg"></i>
			</a>
			<ul>
				<li>
					<a class="btn-floating red" title="Ir al sitio de Dixit" href="http://www.dixit.com.py/#/equipo">
						<i class="large mdi-navigation-arrow-back"></i>
					</a>
				</li>
				<li>
					<a class="btn-floating yellow darken-1" title="Imprimir" href="Javascript:window.print();">
			  			<i class="large mdi-action-print"></i>
					</a>
				</li>
				<li class="hide">
					<a class="btn-floating green" title="Escribir" href="Javascript:void(0);" id="btn-escribir">
					  <i class="large mdi-communication-chat"></i>
					</a>
				</li>
				<li class="hide">
					<a class="btn-floating blue" title="Llamar" href="Javascript:void(0);" id="btn-llamar">
					  <i class="large mdi-communication-call"></i>
					</a>
				</li>
			</ul>
		</div>
		<footer class="page-footer yellow darken-1 hide">
          <div class="footer-copyright">
            <div class="container black-text">
            	&copy; 2015 Desarrollado por <a class="black-text " href="http://equipo.dixit.com.py/nelson">Nelson Páez</a>
            	<a class="grey-text text-lighten-4 right dixit-logo" href="http://dixit.com.py"></a>
            </div>
          </div>
        </footer>
		<script src="$ThemeDir/js/equipo.js"></script>
	<% end_if %>					
</body>
</html>
