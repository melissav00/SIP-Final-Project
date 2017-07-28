var main =  function(){
}


$(document).ready(main);

	$(".navbara,footer a[href='#myPage']").on('click',function(event){

		//hash value overrides default behavior
		if (this.hash !== "") {

		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop:$(hash).offset().top
		}, 900, function(){

			window.location.hash = hash;
		});
	} //End if
	});
})

$(window).scrolldown(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;

		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
});

//Text appears on scroll function

$(window).on("load",function(){
	$(window).scroll(function(){
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		$(".row2").each(function(){
			//Check loaction of each element
			var objectBottom = $(this).offset().top + $(this).outerHeight();

			//If element is within bounds of the window, fate it in
			if (objectBottom < windowBottom){
				if ($(this).css("opacity")==0) {$(this).fadeto(500,1);}
			} else{
				if ($(this).css("opacity")==1){$(this).fadeto(500,0);}
			}
		});
 }).scroll(); //invoke scroll-handler on page-load
});
