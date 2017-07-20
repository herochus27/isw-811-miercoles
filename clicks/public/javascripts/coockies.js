
$('#click').on('click',  function(event) {
  get_coockie();

});

$('#reset').on('click',  function(event) {
  clear_cookie();

});


function get_coockie() {
	$.ajax({
	url: '/coockies',
	type: 'GET'
	})
	.done(function() {
		var coockie = document.cookie;
		coockie = coockie.replace('TEST=', '');	
		$('#valor').text('');
		$('#valor').text(coockie);
	});	
}
function clear_cookie() {	
	document.cookie = 'TEST=0';
	$('#valor').text('');
	$('#valor').text(0);
}





