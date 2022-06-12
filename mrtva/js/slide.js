	$(".btnClick").click(function(event) {
		var x = $(this).text();
		if (x == "Read More") 
		{
			$(this).text("Read Less");
			$(this).parent(".show-details").find('.show-me').slideDown();
		}
		else
		{
			$(this).text("Read More");
			$(this).parent(".show-details").find('.show-me').slideUp();
		}
	});