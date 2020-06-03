
console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  
  addMyEventListener()
  getDate()
  fade()

});

function addMyEventListener(){

	/* Hamburger Menu */
	$('.hamburger').click(function(){
		$(this).toggleClass('opened');
		$('header nav').toggleClass('active');
		
	});

}


//update year in footer
function getDate(){
	var d = new Date();
	var n = d.getFullYear()
	$('.year').html(n);
}


// text fading in

function fade(){
	var text = "Let's built your site!";
	function letter() {
		var animatedText = $('#animatedText').text(); 
		var t = text.charAt(0);
		text = text.substr(1);
		$('#animatedText').text(animatedText + t);
		if(text.length > 0) setTimeout(letter, 85);
	}
		setTimeout(letter, 85);
}
	