window.addEventListener("load", function(){
	document.querySelector('#header').insertAdjacentHTML('beforebegin',
	'<ul>' +
	 ' <li><a class="active" href="index.html">Home</a></li>' +
	 ' <li><a href="new.html">New aircraft</a></li>' +
	 ' <li><a href="current.html">Current aircraft</a></li>' +
	 ' <li><a href="old.html">Old aircraft</a></li>' +
	 ' <li><a href="reference.html">References</a></li>' +
	 ' <li><a href="contact.html">Contact us</a></li>' +
	'</ul>'
	);
});