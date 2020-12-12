window.addEventListener("load", function(){
	document.getElementById('header').innerHTML +=
	'<ul>' +
	 ' <li><a href="index.html">Home</a></li>' +
	 ' <li><a href="in-service.html">In-service</a></li>' +
	 ' <li><a href="retired.html">Retired</a></li>' +
	 ' <li><a href="reference.html">References</a></li>' +
	 ' <li><a href="contact.html">Contact us</a></li>' +
	'</ul>'
	;
	
	document.getElementById('footer').innerHTML +=
		'<footer>' +
		  '<a>George Lee @ 2020</a></p>' +
		'</footer>'
	;
});