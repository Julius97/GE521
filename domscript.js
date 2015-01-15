load_page_url = "home.html";

$(document).ready(function(){
	$(".menue ul li a").click(function(ev){
		if(load_page_url != $(this).attr("href")){
			load_page_url = $(this).attr("href");
			$("#content").load($(this).attr("href"));
		}
		ev.preventDefault();
	});
});