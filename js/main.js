$(document).ready(function(){
//Loader
	$(window).on('load', function(){
		$('.loader-block').delay(500).fadeOut('slow');
		$('body').css('overflow', 'visible');
	});

//Navigation & Info Panel
	$('#nav-trigger').on('click', function(){
		$('#nav-trigger').toggleClass('is-active');
		$('#info-panel-trigger').removeClass('is-active');
		var hamburgerActive = $('#nav-trigger').hasClass('is-active');
		$(".info-panel").slideUp(200);
		if (hamburgerActive){
			$('.nav-wrapper').slideDown(200);
		} else {
			$('.nav-wrapper').slideUp(200);
		} 
		return false;
	});

	var sectHeight = $('header').height();
	$('.section-1').css({'padding-top': sectHeight});
	

	$('#info-panel-trigger').on('click', function(){
		$('#info-panel-trigger').toggleClass('is-active');
		$('#nav-trigger').removeClass('is-active');
		var hamburgerActive = $('#info-panel-trigger').hasClass('is-active');
		$(".nav-wrapper").slideUp(200);
		if (hamburgerActive){
			$('.info-panel').slideDown(200);
		} else {
			$('.info-panel').slideUp(200);
		} 
		return false;
	});

// Bet-slider
	$('.betSlider').slick({
		infinite: true,
		speed: 300,
		autoPlay: true,
		autoplaySpeed: 2000,
		arrow: true,
		dots: true
	});

// Responsive Slider
	$('.newsSlider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});

	$('.fifthSlider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false
		  }
		}
		]
	});


//Popups
	$('.btn-popup').on('click', function(){
		var popupId = $(this).attr('data-popup');
		var tabPopup = $(this).attr('tab-popup');

		$('.popup-wrapper').removeClass('active-popup');
		$('#' + popupId).addClass('active-popup');

		$('.login-popup ul.tabs li').removeClass('current');
		$('.login-popup .tab-content .tab').removeClass('current');

		$('.' + tabPopup).addClass('current');
	});
	$('body').on('click','#close-popup', function(){
		$('.popup-wrapper').removeClass('active-popup');
	});

// Tabs
	$('.tabs li').on('click', function(){
		var tabId = $(this).attr('data-tab');
		var thisTab = $(this).parent('.tabs').siblings('.tab-content').children('.tab');

		$(this).siblings('.tabs li').removeClass('current');
		thisTab.removeClass('current');

		$(this).addClass('current');
		$("#" + tabId).addClass('current');
	});

//SlideDown
	$('body').on('click', '.slideDown', function(){
		var thisSlideDown = $(this).siblings('.slideDownContent');
		thisSlideDown.slideToggle(200);
		$(this).toggleClass('active');
	});

	$('body').on('click', '.betSlidedown', function(){
		var thisBetTr = $(this).parents('.st-tr').siblings('.bet-tr');
		$('.bet-tr').slideUp();
		$('.view-bet-tr').slideUp();

		var thisActive = $(this).hasClass('active');
		if(thisActive) {
			$('.arrow-btn').removeClass('active');
			$(this).removeClass('active');
			thisBetTr.slideUp();
		} else {
			$('.arrow-btn').removeClass('active');
			$(this).addClass('active');
			thisBetTr.slideDown();
		}
	});

	$('body').on('click', '.viewBetsSlidedown', function(){
		var thisViewBetTr = $(this).parents('.st-tr').siblings('.view-bet-tr');
		$('.view-bet-tr').slideUp();
		$('.bet-tr').slideUp();
		
		var thisActive = $(this).hasClass('active');
		if(thisActive) {
			$('.arrow-btn').removeClass('active');
			$(this).removeClass('active');
			thisViewBetTr.slideUp();
		} else {
			$('.arrow-btn').removeClass('active');
			$(this).addClass('active');
			thisViewBetTr.slideDown();
		}
	});

});