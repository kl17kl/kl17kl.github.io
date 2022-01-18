//navbar
 var navItems = document.getElementById("vertical_nav").querySelectorAll("li");

console.log(navItems)

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