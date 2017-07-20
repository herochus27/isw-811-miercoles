var number = parseInt(localStorage.getItem('number')) || 0;

function count() {
	document.getElementById('labelincrement').innerHTML = number += 1;
	savestorage();
}

function savestorage() {
	localStorage.setItem('number', parseInt(number));
}

function removestorage() {

	localStorage.removeItem('number');
	number = 0;
	document.getElementById('labelincrement').innerHTML  = 0;
}

document.getElementById('labelincrement').innerHTML  = localStorage.getItem('number') || 0;