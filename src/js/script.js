$(document).ready(function(){

	//Slick slider
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:
		 `<button class="btn-slider arrow-prev">
					<svg class="arrow-prev__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrowprev" />
					</svg>
			</button>`,
		nextArrow: `
			<button class="btn-slider arrow-next">
					<svg class="arrow-next__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrownext" />
					</svg>
			</button>`,
		fade: true,
		infinite: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: false,
		dots: false,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true
	});
	$('.residents__list').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		variableWidth: true,
		infinite: true
	});
	$('.investments__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		prevArrow:
		 `<button class="btn-slider arrow-prev">
					<svg class="arrow-prev__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrowprev" />
					</svg>
			</button>`,
		nextArrow: `
			<button class="btn-slider arrow-next">
					<svg class="arrow-next__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrownext" />
					</svg>
			</button>`,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.news__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		prevArrow:
		 `<button class="btn-slider arrow-prev">
					<svg class="arrow-prev__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrowprev" />
					</svg>
			</button>`,
		nextArrow: `
			<button class="btn-slider arrow-next">
					<svg class="arrow-next__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrownext" />
					</svg>
			</button>`,
	});

	// Number counter animation
	/**
	 * jQuery scroroller Plugin 1.0
	 *
	 * http://www.tinywall.net/
	 *
	 * Developers: Arun David, Boobalan
	 * Copyright (c) 2014
	 */
	(function($){
		$(window).on("load",function(){
			$(document).scrollzipInit();
			$(document).rollerInit();
		});
		$(window).on("load scroll resize", function(){
			$('.numscroller').scrollzip({
				showFunction    :   function() {
					numberRoller($(this).attr('data-slno'));
				},
				wholeVisible    :     false,
			});
		});
		$.fn.scrollzipInit=function(){
			$('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
		};
		$.fn.rollerInit=function(){
			var i=0;
			$('.numscroller').each(function() {
				i++;
				$(this).attr('data-slno',i);
				$(this).addClass("roller-title-number-"+i);
			});
		};
		$.fn.scrollzip = function(options){
			var settings = $.extend({
				showFunction    : null,
				hideFunction    : null,
				showShift       : 0,
				wholeVisible    : false,
				hideShift       : 0,
			}, options);
			return this.each(function(i,obj){
				$(this).addClass('scrollzip');
				if ( $.isFunction( settings.showFunction ) ){
					if(
					 !$(this).hasClass('isShown')&&
					 ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
					 ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
					){
						$(this).addClass('isShown');
						settings.showFunction.call( this );
					}
				}
				if ( $.isFunction( settings.hideFunction ) ){
					if(
					 $(this).hasClass('isShown')&&
					 (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
						($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
					){
						$(this).removeClass('isShown');
						settings.hideFunction.call( this );
					}
				}
				return this;
			});
		};
		function numberRoller(slno){
			var min=$('.roller-title-number-'+slno).attr('data-min');
			var max=$('.roller-title-number-'+slno).attr('data-max');
			var timediff=$('.roller-title-number-'+slno).attr('data-delay');
			var increment=$('.roller-title-number-'+slno).attr('data-increment');
			var numdiff=max-min;
			var timeout=(timediff*1000)/numdiff;
			//if(numinc<10){
			//increment=Math.floor((timediff*1000)/10);
			//}//alert(increment);
			numberRoll(slno,min,max,increment,timeout);

		}
		function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
			if(min<=max){
				$('.roller-title-number-'+slno).html(min);
				min=parseInt(min)+parseInt(increment);
				setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
			}else{
				$('.roller-title-number-'+slno).html(max);
			}
		}
	})(jQuery);

	//Show scroll button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
			$('.btn-scroll-up').show();

		} else if (document.body.scrollTop < 750 || document.documentElement.scrollTop < 750) {
			$('.btn-scroll-up').hide();

		}
	}
	// Scroll to top
	$('.btn-scroll-up, .page__logo-link').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});

	//Burger and menu animation
	$('.burger').on('click', function() {
		$('.menu').toggleClass('menu-active');
		$(this).toggleClass('burger-active');
	});
	$('.menu__link').click(function() {
		if($('.burger').hasClass('burger-active')) {
			$('.burger').removeClass('burger-active');
		}
		if($('.menu').hasClass('menu-active')) {
			$('.menu').removeClass('menu-active');
		}
	});

	//Menu links click scroll
	$('.menu__link').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('.menu__link').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-0;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

