var currentIndex = 1;
// window.addEventListener('load', function() {
//     document.getElementsByClassName("slide").style.display = "none";	
//     document.getElementsByClassName("dot").className = document.getElementsByClassName("dot").className.replace(" active", "");
//     console.log('All assets are loaded')
// })


function displaySlide(n) {
	currentIndex = n;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	var slno = document.getElementById("slide-no");

	if(currentIndex > slides.length) {
		currentIndex = 1;	
	}
	if(currentIndex < 1) {
		currentIndex = slides.length;	
	}
	for(var i = 0; i < slides.length; i++)	{
		slides[i].style.display = "none";	
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[currentIndex - 1].style.display = "block";
	dots[currentIndex - 1].className = "dot active";
	slno.innerHTML = currentIndex + "/" + slides.length;
}

displaySlide(currentIndex);

function changeSlide(n) {
	currentIndex += n;
	displaySlide(currentIndex);	
}

function currentSlide(n) {
		displaySlide(n);
}

function myfunc(){
	document.getElementById("dog").style.display = 'none';
}

function myfunc1(){
	document.getElementById("dog").style.display = 'block';
}