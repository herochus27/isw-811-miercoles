
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
		cookie = cookie.replace('TEST=', '');	
		$('#valor').text('');
		$('#valor').text(cookie);
	});	
}

function clear_cookie() {	
	document.cookie = 'TEST=0';
	$('#valor').text('');
	$('#valor').text(0);
}





