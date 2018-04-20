var button_prev = document.querySelector('#gallery .buttons #prev');
var button_next = document.querySelector('#gallery .buttons #next');

var images = document.querySelectorAll('#gallery .photo img');
var i = 0;

button_prev.onclick = function(){
	images[i].className = '';
	i--;
	if (i < 0) {
		i = images.length - 1;
	}
	images[i].className = 'showed';
}

button_next.onclick = function(){
images[i].className = '';
	i++;
	if (i >= images.length) {
		i = 0
	}
	images[i].className = 'showed';
}
