window.addEventListener("load", function(){
	document.getElementById('header').innerHTML +=
	'<ul class="navigation">' +
	 ' <li class="navigationItems"><a href="index.html">Home</a></li>' +
	 ' <li class="navigationItems"><a href="in-service.html">In-service</a></li>' +
	 ' <li class="navigationItems"><a href="retired.html">Retired</a></li>' +
	 ' <li class="navigationItems"><a href="reference.html">References</a></li>' +
	 ' <li class="navigationItems"><a href="contact.html">Contact us</a></li>' +
	'</ul>'
	;
	
	document.getElementById('footer').innerHTML +=
		'<footer>' +
		  '<a>George Lee @ 2020</a></p>' +
		'</footer>'
	;
	
	if(window.location.href.match('message-sent.html')){
		var params = getParamsObject();
		document.getElementById("messageSentText").innerHTML =  "Thank you " + params.firstname + 
																" for your message we will send a confirmation email to " 
																+ params.email + ". You have opted " + params.marketing +
																" for email marketing.";
	}
});

function getParamsObject(){
	var search = location.search.substring(1);
	return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
}