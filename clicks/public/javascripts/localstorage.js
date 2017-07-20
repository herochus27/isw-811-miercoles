var number = parseInt(sessionStorage.getItem('number')) || 0;

function count() {
	document.getElementById('labelincrement').innerHTML = number += 1;
	savestorage();
}

function savestorage() {
	localStorage.setItem('number', parseInt(number));
}

function removestorage() {

	localStorage.removeItem('number');
}

document.getElementById('labelincrement').innerHTML  = localStorage.getItem('number') || 0;