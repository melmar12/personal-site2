$(function () {

	$(window).scroll(function () {

		var is_mobile = false;
		if ( $('.photo').css('justify-content') == 'center') {
			is_mobile = true;
		}

		if (!is_mobile) {
			var scrollin = $(window).scrollTop();
			var offSet = (scrollin * -1.2);

			if (scrollin < $(".text").height()) {
				$(".photo").css({"margin-top": offSet.toString() + "px"});
			}
		}
	});
});
