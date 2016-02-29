
$(document).ready(function() {
    $("a").click(function() {
		$(this).toggleClass(function() {
			if ($(this).prev().attr("class") === 'hide'){
				$(this).prev().show()
				$(this).prev().removeClass('hide')
				$(this).html('<a href="#">Show less</a>');
			}
			else
				{
				$(this).prev().hide()
				$(this).prev().addClass('hide')
				$(this).html('<a href="#">Show more</a>');
				}
       
    	});
   }); 
});






