//counter
function returnEndDate(d, h, m, s) {
	var myDate = new Date();
	myDate.setDate(myDate.getDate() + d);
	myDate.setHours(myDate.getHours() + h);
	myDate.setMinutes(myDate.getMinutes() + m);
	myDate.setSeconds(myDate.getSeconds() + s);
	return myDate;
}
function get_timer() {
	var date_t = new Date(date_new);	
	var date = new Date();	
	var timer = date_t - date;	
	if(date_t > date) {	
		var day = parseInt(timer/(60*60*1000*24)); if(day < 10) {day = '0' + day;} day = day.toString();
		var hour = parseInt(timer/(60*60*1000))%24; if(hour < 10) {hour = '0' + hour;} hour = hour.toString();
		var min = parseInt(timer/(1000*60))%60; if(min < 10) {min = '0' + min;} min = min.toString();
		var sec = parseInt(timer/1000)%60; if(sec < 10) { sec = '0' + sec; } sec = sec.toString();

		timerUpdate(day, hour, min, sec);
		setTimeout(get_timer, 1000);
	}
}
function timerUpdate(d, h, m, s) {
	$('.counter-block .d').text(d);
	$('.counter-block .h').text(h);
	$('.counter-block .m').text(m);
	$('.counter-block .s').text(s);
}

//animate
function animateInit () {
	animate_sec();
	animate_arrow();
	//animate_block();
	animate_cloud();
	animate_parallax()
}
function animate_sec() {
	if(typeof is === 'undefined') { 
		is = 59;
	}
	if(is < 0) {
		get_timer();
	} else {
		if(is < 10) {
			var s = '0' + is;
		} else {
			var s = is;
		}
		$('.counter-block .s').text(s);
		is--;
		setTimeout(animate_sec, 100);
	}
}
function animate_arrow() {
	$('#top-arrow').toggleClass('animate');
	setTimeout(animate_arrow, 1000);
}

function animate_block() {
	$(window).scroll(function() {
		var stw = $(window).scrollTop();
		var hw = $(window).height();
		$('.animate-block').each(function() {
			var sTopBlock =  $(this).offset().top;
			var sBottomBlock = sTopBlock + $(this).height();
			if((stw+hw) > sTopBlock && stw < sBottomBlock) {
				$(this).addClass('show');
			} else {
				$(this).removeClass('show');
			}
		});
	});
}
function animate_cloud() {
	var ratio = [0.1, 0.85, 0.7, 0.8, 0.9];
	$(window).scroll(function() {
		var stw = $(window).scrollTop();
		var hw = $(window).height();
		var sTopBlock =  $('.form2-section').offset().top;
		var sTopBlock2 =  $('.scam-section').offset().top;
		var sBottomBlock =  $('.form3-section').offset().top;
		if(stw > sTopBlock && stw < sBottomBlock) {
			var r = (stw - sTopBlock);
			for(var i = 3; i < 6; i++) {
				t = r*ratio[i - 1];
				$('.cloud-' + i).css({'top': t + 'px'});
			}
		}
		if(stw > sTopBlock2 && stw < sBottomBlock) {
			var r = (stw - sTopBlock2);
			for(var i = 1; i < 3; i++) {
				t = r*ratio[i - 1];
				$('.cloud-' + i).css({'top': t + 'px'});
			}
		}
	});
}
function animate_parallax() {
	var hw = $(window).height();
	//top
	var sTopBlock =  $('.m-we').offset().top;
	var sBottomBlock =  $('.key-section').offset().top;
	//what know
	var sTopBlock2 =  $('.what-know-section').offset().top;
	var sBottomBlock2 =  $('.details-section').offset().top;
	//
	var sTopBlock3 =  $('.form2-section').offset().top;
	var sBottomBlock3 =  $('.scam-section').offset().top;
	//scam
	var sTopBlock4 =  $('.scam-section').offset().top;
	var sBottomBlock4 =  $('.garantee-section').offset().top;
	//garantee
	var sTopBlock5 =  $('.garantee-section').offset().top;
	var sBottomBlock5 =  $('.form3-section').offset().top;
	//special
	var sTopBlock6 =  $('.special-section').offset().top;
	var sBottomBlock6 =  $('.letters-section').offset().top;
	$(window).scroll(function() {
		var stw = $(window).scrollTop();
		//top
		if(stw > sTopBlock && stw < sBottomBlock) {
			var r = (stw - sTopBlock);
			$('.parallax-1').css({'top': (r*0.75) + 'px'});
			$('.parallax-2').css({'top': (r*0.85) + 'px'});
		}
		if(stw > sTopBlock2 && stw < sBottomBlock2) {
			var r = (stw - sTopBlock2);
			$('.parallax-3').css({'top': (r*0.85) + 'px'});
			$('.parallax-4').css({'top': (r*0.55) + 'px'});
		}
		if(stw > sTopBlock3 && stw < sBottomBlock3) {
			var r = (stw - sTopBlock3);
			$('.parallax-5').css({'top': (r*0.85) + 'px'});
		}
		if(stw > sTopBlock4 && stw < sBottomBlock4) {
			var r = (stw - sTopBlock4);
			$('.parallax-6').css({'top': (r*0.75) + 'px'});
			$('.parallax-7').css({'top': (r*0.5) + 'px'});
			$('.parallax-8').css({'top': (r*0.85) + 'px'});
			$('.parallax-11').css({'top': (r*0.15) + 'px'});
		}
		if(stw > sTopBlock5 && stw < sBottomBlock5) {
			var r = (stw - sTopBlock5);
			$('.parallax-9').css({'top': (r*0.75) + 'px'});
			$('.parallax-10').css({'top': (r*0.5) + 'px'});
			$('.parallax-12').css({'top': (r*0.85) + 'px'});
			$('.parallax-13').css({'top': (r*0.3) + 'px'});
			$('.parallax-15').css({'top': (r*0.15) + 'px'});
		}
		if(stw > sTopBlock6 && stw < sBottomBlock6) {
			var r = (stw - sTopBlock6);
			//$('.parallax-16').css({'top': (r*0.75) + 'px'});
			$('.parallax-17').css({'top': (r*0.5) + 'px'});
			//$('.parallax-18').css({'top': (r*0.85) + 'px'});
		}
	});
}


$(document).ready(function() {	
	//counter init
	var dd = 1;
	var hh = 12;
	var mm = 9;
	var ss = 6;
	if($.cookie('timer')){
		var dateEnd = $.cookie('timer');
		var date_t = new Date(dateEnd);	
		var date = new Date();
		if(date_t < date) {
			var dateEnd = returnEndDate(dd, hh, mm, ss);
			$.cookie('timer', dateEnd, {expires: 30, path: "/"});
		}
	} else {
		var dateEnd = returnEndDate(dd, hh, mm, ss);
		$.cookie('timer', dateEnd, {expires: 30, path: "/"});
	}
	date_new = dateEnd;
	//get_timer();
	//animate_sec();
	//setTimeout(animate_sec, 5000);
	animateInit();

	//fancybox
	$('.letters-section a').fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		closeBtn: false,
		helpers: {
			buttons: {},
			overlay: { locked: false }
		}
	});

	//slider key
	$('#keySlider').jCarouselLite({
		btnNext: ".ks-next",
		btnPrev: ".ks-back",
		visible: 1,
		scroll: 1,
		speed: 1000,
		btnGo: ['.key-section .navi .1', '.key-section .navi .2'],
		afterEnd: function(a) {
			$('.key-section .navi li').removeClass('active');
			if(a.index() > 2) {
				$('.key-section .navi .1').addClass('active');
			} else {
				$('.key-section .navi .' + a.index()).addClass('active');
			}
		}
	});
	//slider result
	var s = $('#resultSlider .slide').size();
	var sli = '';
	var bli = [];
	for(var i = 0; i < s; i++) {
		sli += '<li class="' + (i+1) + '">&nbsp;</li>\n';
		bli[i] = '.result-section .navi .' + (i+1);
	}
	$('.result-section .navi').html(sli);
	$('.result-section .navi .1').addClass('active');
	$('#resultSlider').jCarouselLite({
		btnNext: ".rs-next",
		btnPrev: ".rs-back",
		visible: 1,
		scroll: 1,
		//auto: 5000,
		speed: 1000,
		btnGo: bli,
		afterEnd: function(a) {
			$('.result-section .navi li').removeClass('active');
			if(a.index() > s) {
				$('.result-section .navi .1').addClass('active');
			} else {
				$('.result-section .navi .' + a.index()).addClass('active');
			}
		}
	});
	//img viewer
	$('.result-section .thumb img').click(function() {
		var p = $(this).parent().parent();
		var i = this.src;
		$('.m-pic', p).attr('src', i);
	});
	//slider letters
	$('#letterSlider').jCarouselLite({
		visible: 5,
		scroll: 5,
		auto: 5000,
		speed: 1000,
		btnGo: ['.letters-section .navi .1', '', '', '', '', '.letters-section .navi .2', '', '', '', '', '.letters-section .navi .3', '', '', ''],
		afterEnd: function(a) {
			$('.letters-section .navi li').removeClass('active');
			switch(a.index()) {
				case 5: $('.letters-section .navi .2').addClass('active'); break;
				case 10: $('.letters-section .navi .3').addClass('active'); break;
				default: $('.letters-section .navi .1').addClass('active'); $('.letters-section .navi .1').click();
			}
		}
	});

	//call
	$('.btn-modal').click(function(e) {
		e.preventDefault();
			var h = '<span>Оставьте заявку</span> на бесплатный замер,<br> и получите детский замок<span class="y"> в подарок</span>';
		if($(this).hasClass('mwindow')) {
			h = '<span>ОСТАВЬТЕ ЗАЯВКУ</span> НА "ОКНО ПОД КЛЮЧ"<br> ПО СПЕЦИАЛЬНОЙ ЦЕНЕ';
		}
		if($(this).hasClass('mbalcon')) {
			h = '<span>ОСТАВЬТЕ ЗАЯВКУ</span> НА "БАЛКОН ПОД КЛЮЧ"<br> ПО СПЕЦИАЛЬНОЙ ЦЕНЕ';
		}
		$('#modal-form h3').html(h);
		$('.overlay').show();
		$('#modal-form').fadeIn();
	});
	$('.overlay').click(function(e) {
		e.preventDefault();
		$('#modal-form').fadeOut();
		$('.overlay').hide();
	});
	$('.sform').submit(function(e) {
		e.preventDefault();
		var yacity = $('#f-city').val();
		var f = $(this);
		$('input[type=text]', f).removeClass('ierror');

		var name = $('input[name=name]', f).val();
		var phone = $('input[name=phone]', f).val();
		var h = $('#modal-form h3').text();
		var error = false;
		if(name == '') {
			$('input[name=name]', f).addClass('ierror');
			error = true;
		}
		if(phone == '') {
			$('input[name=phone]', f).addClass('ierror');
			error = true;
		}
		if(error) {
			return false;
		}
			
		var query = 'act=sender';
			query += '&name=' + encodeURIComponent(name);
			query += '&phone=' + encodeURIComponent(phone);
			query += '&subject=' + encodeURIComponent(h);
			query += '&yacity=' + encodeURIComponent(yacity);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					$('input[type=text]', f).val('');
					//echo
					$('.overlay').hide();
					$('#modal-form').hide();
					$.fancybox('#modal-success');
					yaCounter24771731.reachGoal('GetForm');
					location.href = '#form-send';
				} else {
					alert('Ошибка! Повторите позже.');
				}
			}
		});
		return false;
	});

	//mask
	$('input[name=phone]').maskinp('+7 (999) 999-99-99');


});