
$('#click').on('click',  function(event) {
  get_cookie();
});

$('#reset').on('click',  function(event) {
  clear_cookie();
});

function get_cookie() {
	$.ajax({
	url: '/cookies',
	type: 'GET'
	})
	.done(function() {
		var cookie = document.cookie;
		var cookies = cookie.split(';');		
		for (var i = 0; i < cookies.length; i++) {	
			if (cookies[i].indexOf('TEST') > 0) {
				cookie = cookies[i].replace('TEST=', '');	
				$('#valor').text('');
				$('#valor').text(cookie);
				break;
			};
		};		
	});	
}

function clear_cookie() {	
	document.cookie = 'TEST=0';
	$('#valor').text('');
	$('#valor').text(0);
}





