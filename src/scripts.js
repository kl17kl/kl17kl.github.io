//navbar
 var navItems = document.getElementById("vertical_nav").querySelectorAll("li");

function on_hover(e) {
  navItems[e].children[0].children[0].style.visibility = "visible";
}
function off_hover(e) {
  navItems[e].children[0].children[0].style.visibility = "hidden";
}
function selected(e) {
  for (var i=0; i<navItems.length; i++) {
    if (navItems[i].children[0].classList.contains("is-selected")) {
      navItems[i].children[0].classList.remove("is-selected");
    }
  }
  if (!navItems[e].children[0].classList.contains("is-selected")) {
    navItems[e].children[0].classList.add("is-selected");
  }
}

//typewriter
let lines = ['Software Developer', 'UI & UX Designer', 'Web Developer'];
var writer = document.getElementById('writer');
var typewriter = new Typewriter(writer, {
  loop: true,
  delay: 70,
  deleteSpeed: 30,
});

typewriter
  .pauseFor(1000)
  .typeString(lines[0])
  .pauseFor(1500)
  .deleteChars(lines[0].length)
  .pauseFor(700)
  .typeString(lines[1])
  .pauseFor(1500)
  .deleteChars(lines[1].length)
  .pauseFor(700)
  .typeString(lines[2])
  .pauseFor(1500)
  .deleteChars(lines[2].length)
  .start();


//Slideshow
var slideIndex = 0;

function goToSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  //setTimeout(showSlides, 7000);
}
showSlides();

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      entry.target.classList.add('slides-fade');
    }
  });
});

observer.observe(document.querySelector('.slides'));
