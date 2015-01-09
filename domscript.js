load_page_url = "home.html";

$(document).ready(function(){
	$(".menue ul li a").click(function(ev){
		$(".menue ul li").css("background","#45484d");
		$(".menue ul li").css("background","-moz-linear-gradient(top, #45484d 0%, #000000 100%)");
		$(".menue ul li").css("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%,#45484d), color-stop(100%,#000000))");
		$(".menue ul li").css("background","-o-linear-gradient(top, #45484d 0%,#000000 100%)");
		$(".menue ul li").css("background","-ms-linear-gradient(top, #45484d 0%,#000000 100%)");
		$(".menue ul li").css("background","linear-gradient(to bottom, #45484d 0%,#000000 100%)");
		$(".menue ul li").css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 )");
		$(this).parent().css("background","#0e0e0e");
		if(load_page_url != $(this).attr("href")){
			load_page_url = $(this).attr("href");
			$("#content").load($(this).attr("href"));
		}
		ev.preventDefault();
	});
});