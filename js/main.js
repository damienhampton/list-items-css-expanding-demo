$("li").click(function(){
	$("li.open").removeClass("open");
	$(this).addClass("open");
});