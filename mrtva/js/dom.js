$(document).ready(function(){
  		$("#submit").click(function(){
  			var name = $("#name").val();
  			var email = $("#email").val();
  			var pass = $("#password").val();

  			if(name.length == "")
  			{
  				$("#p1").text("Please enter your name");
  				$("#name").focus();
  				return false;
  			}

  			else if(email.length == ""){
  				$("#p2").text("Please enter your email address");
  				$("#email").focus();
  				return false;
  			}


  			else if(pass.length == ""){
  				$("#p3").text("Please enter your password");
  				$("#password").focus();
  				return false;
  			}

  			else{
  				var con = confirm("Are you Done?");
  				if(con == true)
  				{
  					alert("Welcome to our Website");
  					return true;
  				}
  				else{
  					return false;
  				}
  			}
  		});
  	});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function playMp() { 
  var audio = new Audio('audio/click.mp3'); 
  audio.play(); 
}
