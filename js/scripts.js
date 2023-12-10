jQuery(document).ready(function() {



	jQuery(".input").on("click", function() {

		var btnValue = jQuery(this).text();
		var optValue = jQuery(".output").text();

		jQuery(".output").text(optValue += btnValue);

	});

	jQuery(".submit").on("click", function() {

		var res = eval(jQuery(".output").text());

		jQuery(".result").text(res);

	});

	jQuery(".del").click(function() {
		jQuery(".output").text("");
	})
	jQuery(".del").click(function() {
		jQuery(".result").text("");
		jQuery(".output").css({
			'padding-top' : '20vh' , 'font-size' : '50px' , 'color' : '#fff'
		});
	})

	jQuery(".submit").click(function() {
		jQuery(".output").css({
			'padding-top' : '10vh' , 'font-size' : '30px' , 'color' : '#E7E9EB'
		});
	})

	













})