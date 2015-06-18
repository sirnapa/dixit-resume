<!-- Side Menu -->
<div class="container">
	<% loop $Menu(1) %>
		<div class="col-md-12 text-center">
			<br><br>
			<a href="$Link" title="$Title.XML">
				<i class="fa fa-5x fa-file-text-o text-muted"></i><br>
				$MenuTitle.XML
			</a>
		</div>
	<% end_loop %>
</div>
<!-- /Side Menu -->
