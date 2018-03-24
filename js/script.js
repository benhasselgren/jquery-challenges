$(document).ready(function() {
	$("a").html(function() {
		var id = "class='bottom_button'";
		$("a").replaceWith("<button " + id + " >Button</button>");
		$("button").first().attr("id", "one");
	});
	$("button").addClass("makeRed");

	$("button").mouseover(function() {
		$(this).removeClass("makeRed").addClass("makeBorder");
	});
	$(".first_button").mouseleave(function() {
		$(this).removeClass("makeBorder").addClass("makeRed");
	});
	$(".first_button").click(function() {
		$(this).siblings("p").slideToggle(500);
	});
	$(".second_button").click(function() {
		$(this).siblings("p").hide(500).show(500);;
	});

});
