$(function(){
	var loaded= false;
	setTimeout(function(){
		if(!loaded){
			var link="https://docs.google.com/document/d/e/2PACX-1vSHfJsY6RjfGLO7-X2nGiFn357REh03ovKqmYl3aqFSIdeApHx-Wt6kstWNHyEQLcHIPxl4H-dFoogT/pub?embedded=true"
			$(".res").attr("src", link);
		}
	},10000);
	$(".res").on("load", function(){
		loaded=true;
	});
})