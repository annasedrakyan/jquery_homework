

$(document).ready(function(){
      $('.wrapper article').not(':first').hide();

	
	$('h1').click(function(){
		var findArticle = $(this).next('article');
		var findWrapper = $(".wrapper");

		if(findArticle.is(':visible')) {
			findArticle.slideUp("slow");
		}
		else {
			findWrapper.find('article').slideUp("slow");
			findArticle.slideDown("slow");
		}
		
	})
})