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
