get_coockie();
function get_coockie() {
	$.ajax({
	url: '/coockies',
	type: 'GET'
	})
	.done(function() {
		var coockie = document.cookie;
		coockie = coockie.replace('TEST=', '');	
	});	
}
function clear_cookie() {	
	document.cookie = 'TEST=0';
}
