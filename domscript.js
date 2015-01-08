$(document).ready(function(){
	$(".menue ul li a").click(function(ev){
		$("#content").load($(this).attr("href"));
		ev.preventDefault();
	});
});