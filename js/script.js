$(document).ready(function () {

	$(window).scroll(function () {
		let scroll = $(window).scrollTop();

		if (scroll >= 80) {
			$(".header").addClass("scrolled");
		} else {
			$(".header").removeClass("scrolled");
		}
	});

	if (window.pageYOffset > 80) {
		$(".header").addClass("scrolled");
	};

	$('.header__burger').click(function (event) {
		$('.header__burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header').toggleClass('active');
	});

	$('.header__nav a').click(function () {
		$('.header__burger,.header__nav').removeClass('active');
		$('body').removeClass('lock');
		$('.header').removeClass('active');
	});

	$('.faq__controls').click((e) => {
		e.target.parentElement.classList.toggle('checked');
	});

	$.each($('.rations-cards__item') ,(inx, elem) => {
		if (($(window).width() - $(elem).offset().left - $(elem).width()) < 0){
			$(elem).addClass('hidden');
		}
	});

	$.each($('.rations__dots-item'), (inx, elem) => {
		let inxx = inx;

		$(elem).click((e)=>{
			let arr = $('.rations-cards__item');
			arr[inxx]
			console.log(e);
		});
	});

});



// POPUPS
let popupButton = $(".rations-popup__button");
let popupForm = $(".rations-popup__form");
let popupText = $(".rations-popup__wrap");
let popupClose = $(".rations-popup__close");
let popupArea = $(".rations-popup__area");
let popupBuyBtn = $(".popup-form__buy input");
let popupSent = $(".rations-popup__sent");
let popupTextBlock = $(".rations-popup__text");

for (let i = 0; i < popupButton.length; i++) {
	popupButton[i].addEventListener('click', function () {
		popupForm[i].classList.add("active");
		popupText[i].classList.add("notActive");
	}, false);
}

for (let i = 0; i < popupClose.length; i++) {
	popupClose[i].addEventListener('click', function () {
		setTimeout(
			() => {
				popupForm[i].classList.remove("active");
				popupText[i].classList.remove("notActive");
				popupSent[i].classList.remove("active");
				popupTextBlock[i].classList.remove("notActive");
			}, 800
		);
	}, false);
}

for (let i = 0; i < popupArea.length; i++) {
	popupArea[i].addEventListener('click', function () {
		setTimeout(
			() => {
				popupForm[i].classList.remove("active");
				popupText[i].classList.remove("notActive");
				popupSent[i].classList.remove("active");
				popupTextBlock[i].classList.remove("notActive");
			}, 800
		);
	}, false);
}

for (let i = 0; i < popupBuyBtn.length; i++) {
	popupBuyBtn[i].addEventListener('click', function () {
		popupSent[i].classList.add("active");
		popupForm[i].classList.remove("active");
		popupTextBlock[i].classList.add("notActive");
	}, false);
}
// /POPUPS




const swiper = new Swiper('.barf-slider', {
	pagination: {
		el: '.barf-slider__pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		770: {
			slidesPerView: 2,
		},
	},

	simulateTouch: false,
	autoHeight: true,
	slidesPerView: 2,
});