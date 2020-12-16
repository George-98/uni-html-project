window.addEventListener("load", function(){
	
	//Renders the header on page load
	document.getElementById('header').innerHTML +=
	'<ul class="navigation">' +
		'<li class="navigationItems"><a href="index.html">Home</a></li>' +
		'<li class="navigationItems"><a href="in-service.html">In-service</a></li>' +
		'<li class="navigationItems"><a href="retired.html">Retired</a></li>' +
		'<li class="navigationItems"><a href="reference.html">References</a></li>' +
		'<li class="navigationItems"><a href="contact.html">Contact us</a></li>' +
	'</ul>'
	;
	
	//Renders the footer on page load
	document.getElementById('footer').innerHTML +=
		'<footer>' +
			'<p>George Lee @ 2020</p>' +
		'</footer>'
	;
	
	//Only fires when on the message-sent page
	if(window.location.href.match('message-sent.html')){
		var params = getParamsObject();
		var message = "Thank you " + params.firstname + 
					" for your message, we will send a confirmation email to " +
					params.email + ". You have opted " + params.marketing +
					" for email marketing.";
		document.getElementById("messageSentText").innerHTML = message;
	}
});

//This function will return params in JSON which we got from the form
//This function was taken from reference: Stack overflow, Wolfgang Kuehn's answer
function getParamsObject(){
	var search = location.search.substring(1);
	return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"')
		+ '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
}