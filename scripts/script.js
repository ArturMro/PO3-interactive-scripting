
console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  
  addMyEventListener()
  slider()
  fade()
  getDate() 

});

function addMyEventListener(){

	/* Hamburger Menu */
	$('.hamburger').click(function(){
		$(this).toggleClass('opened');
		$('header nav').toggleClass('active');
	});

	// Pricing
	$('#pricing').click(function(){
        checkDomain()
	});
}



// slideshow
function slider(){
	$(".bb-slider").BBSlider({
		slideDuration: 3000,
			autoPlay: true
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
	

// Pricing script

function checkDomain() {
    domainname = $("#txt").val(); //Added parentesis in function val
    var name = domainname.split('.')  //Added var before name variable
    window.alert("You are looking for a " + name[1] + " domain"); // Added space before domain word
    x = money('.' + name[1]); //name(1) changed to name[1]
    
    if (x === false) {
    $("#results").html("We don't have a pirce for this domain right now! Please call use later!"); //Changed "innerHTML =" to html()
    }
    else
    $("#results").html("Well done. Your domain will cost you " + x + "Euros. Try again?");  //Changed "innerHTML =" to html()
}
function money(name) {
    m = [{tld:'.aero', price:'€78.00'}, {tld:'.asia', price:'€19.49'},{tld:'.biz', price:'€18.60'},{tld:'.co', price:'€€25.00'},{tld:'.co.com', price:'€33.00'},{tld:'.com', price:'€15.99'},{tld:'.coop', price:'€138.00'},{tld:'.info', price:'€19.99'},{tld:'.jobs', price:'€129.99'},{tld:'.mobi', price:'€18.00'},{tld:'.name', price:'€14.00'},{tld:'.net', price:'€19.99'},{tld:'.org', price:'€19.99'},{tld:'.pro', price:'€18.00'},{tld:'.tel', price:'€18.00'},{tld:'.travel', price:'€98.00'},{tld:'.ie', price:'€19.99'},{tld:'.uk.com', price:'€38.00'},{tld:'.lu', price:'€34.00'},{tld:'.co.uk', price:'€16.50'}]  //added square bracked to create array m
    for(var i = 0; i < m.length; i++) { //added loop to find mayching "tld"
        var obj = m[i];
        if (obj.tld == name) {return obj.price}
    }
    return false
}