window.addEventListener("load", function(){
	document.getElementById('header').innerHTML +=
	'<ul>' +
	 ' <li><a href="index.html">Home</a></li>' +
	 ' <li><a href="in-service.html">Aircraft in service</a></li>' +
	 ' <li><a href="retired.html">Retired aircraft</a></li>' +
	 ' <li><a href="reference.html">References</a></li>' +
	 ' <li><a href="contact.html">Contact us</a></li>' +
	'</ul>'
	;
	
	document.getElementById('footer').innerHTML +=
		'<footer>' +
		  '<p>Author: George Lee<br>' +
		  '<a href="glee@example.com">glee@example.com</a></p>' +
		'</footer>'
	;
});