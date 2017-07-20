function refresh() {
	document.getElementById('labelincrement').innerHTML  = localStorage.getItem('number') || 0;
}

function increment() {
	var count = parseInt(localStorage.getItem('number')) || 0;
	count++;
	localStorage.setItem('number', count);
	refresh();
}

function reset() {
	localStorage.setItem('number', 0);
	refresh();
}

refresh();
