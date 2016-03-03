
$(document).ready(function() {
    $("a").click(function() {
		$(this).toggleClass(function() {
			if ($(this).prev().attr("class") === 'hide'){
				$(this).prev().show()
				$(this).prev().removeClass('hide')
				$(this).text("Show Less");
			}
			else
				{
				$(this).prev().hide()
				$(this).prev().addClass('hide')
				$(this).text("Show More");
				}
       
    	});
   }); 
});






