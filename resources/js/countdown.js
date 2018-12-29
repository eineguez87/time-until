$( document ).ready(function() {
	var year = new Date().getFullYear();
    CountDownTimer('December 25 ' + year, 'christmas-counter');   
}

function CountDownTimer(dt, id) {
	var end = new Date(dt);

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		
		if (end.toDateString() == now.toDateString()) {
			clearInterval(timer);
			document.getElementById(id).innerHTML = '0 days ';
			var html = '';
			$('.merry_xmas').removeClass('hidden');
			return;
		}
		
		
		if (distance < 0) {
			end.setFullYear(year + 1);
			distance = end - now;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById(id).innerHTML = days + ' days ';
		document.getElementById(id).innerHTML += hours + ' hrs ';
		document.getElementById(id).innerHTML += minutes + ' mins ';
		document.getElementById(id).innerHTML += seconds + ' secs';
	}
	
	timer = setInterval(showRemaining, 1000);
}
