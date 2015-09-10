$("li").click(function(){
	//if clicked open item, return
	if($(this).hasClass("open")){
		return
	}
	//if no item is open
	if($("li.open").length <= 0){
		$(this).addClass("open");
		return;
	}
	//else close the open item, then open the selected one
	$(this).addClass("waiting");
	$("li.open").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		$("li.waiting").addClass("open");
		$("li.waiting").removeClass("waiting");
	});
	$("li.open").removeClass("open");
});

