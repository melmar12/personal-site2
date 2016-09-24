$(function () {

	$(window).scroll(function () {

			var scrollin = $(window).scrollTop();
			var offSet = (scrollin * -1.2);

			if (scrollin < $(".text").height()) {
				$(".photo").css({"margin-top": offSet.toString() + "px"});
			}
	});
});
