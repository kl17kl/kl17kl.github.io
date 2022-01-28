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
let lines = ['Software Developer', 'UI & UX Designer', 'Web Developer', 'Visual & Graphic Designer'];
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
  .pauseFor(700)
  .typeString(lines[3])
  .pauseFor(1500)
  .deleteChars(lines[3].length)
  .pauseFor(700)
  .start();


//Slides
var slideIndex = 0;

function goToSlide(n, section) {
  showSlides(slideIndex = n, section);
}
function showSlides(n, section) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-dot");
  slides = [].slice.call(slides);
  dots = [].slice.call(dots);
  var slides_arr = [];
  var dots_arr = [];
  // Set up 2-D slide and slide-dot arrays
  for (i = 0; i < 4; i++) {
    if (i==1) { //HVAD
      slides_arr.push(slides.splice(0,3));
      dots_arr.push(dots.splice(0,3));
    }
    else {
      slides_arr.push(slides.splice(0,2));
      dots_arr.push(dots.splice(0,2));
    }
  }
  if (n > slides_arr[section].length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides_arr[section].length}
  // Hide all slides
  for (i = 0; i < slides_arr[section].length; i++) {
    slides_arr[section][i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides_arr[section].length) {slideIndex = 1}    
  // Set up active slide-dot
  for (i = 0; i < dots_arr[section].length; i++) {
    dots_arr[section][i].className = dots_arr[section][i].className.replace(" active-dot", "");
  }
  slides_arr[section][slideIndex-1].style.display = "block";  
  dots_arr[section][slideIndex-1].className += " active-dot";
}
showSlides(0,0);
showSlides(0,1);
showSlides(0,2);


// observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) { //divider
      if (entry.target.classList == "divider") {
        entry.target.classList.add('divider-fade');
      }
      else if (entry.target.classList == "project-bg") {
        entry.target.classList.add('project-bg-right');
      }
      else if (entry.target.classList == "project-bg project-left") {
        entry.target.classList.add('project-bg-left');
      }
      else { //slides
        entry.target.classList.add('slides-fade');
      }
    }
  });
});
// observer - title & about me
observer.observe(document.getElementById('title'));
observer.observe(document.getElementById('about-me'));

// observer - slides
var allSlides = document.querySelectorAll('.slides');
for (var i = 0; i < allSlides.length; i++) {
  observer.observe(allSlides[i]);
}
// observer - dividers
var allDividers = document.querySelectorAll('.divider');
for (var i = 0; i < allDividers.length; i++) {
  observer.observe(allDividers[i]);
}
// observer - project-bg
var allProjectBgs = document.querySelectorAll('.project-bg');
for (var i = 0; i < allProjectBgs.length; i++) {
  observer.observe(allProjectBgs[i]);
}

//floaters
(function() {
  var container = document.getElementById("floater-container"),
  floater = document.getElementsByClassName("floater")
  var mouse = {
    _x: 0, _y: 0, x: 0, y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
  };
  mouse.setOrigin(container);
  var onMouseEnterHandler = function(event) {
    update(event);
  };
  var onMouseLeaveHandler = function() {
    [].forEach.call(floater, function(x){x.style="";});
  };
  var onMouseMoveHandler = function(event) {
    update(event);
  };
  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.x / -10).toFixed(2),
      (mouse.y / 10).toFixed(2)
    );
  };
  var updateTransformStyle = function(x, y) {
    [].forEach.call(floater, function(e) {
      var style = "translate3d(" + x * e.dataset.depth + "px, " + y * e.dataset.depth + "px, 0px)";
      e.style.transform = style;
      e.style.mozTransform = style;
      e.style.msTransform = style;
      e.style.oTransform = style;
    });      
  };
  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
