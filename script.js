document.getElementById('moreOptions').addEventListener('change', function() {
  let value = this.value;
  if (value) {
      window.location.href = value;
  }
});

document.getElementById('moreLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  let dropdown = document.getElementById('moreOptions');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  
  if (window.innerWidth <= 768) { // Check if mobile
      dropdown.style.position = 'relative';
      dropdown.style.width = '100%';
  }
});

// Prevent the dropdown from closing immediately
document.getElementById('moreOptions').addEventListener('click', function(event) {
  event.stopPropagation();
});

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('#moreOptions') && !event.target.matches('#projectbtn')) {
      document.getElementById('moreOptions').style.display = 'none';
  }
});

function navigateTo(value) {
  if (value) {
      window.location.href = value;
  }
}


// Close the dropdown if clicked outside
window.addEventListener('click', function (event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll('.drop-content').forEach(content => {
      content.style.display = 'none';
    });
  }
});


// Close the dropdown if clicked outside
window.addEventListener('click', function (event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll('.drop-content').forEach(content => {
      content.style.display = 'none';
    });
  }
});

// navigation function s 
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
// closing the navmenu when a button is clicked 
document.querySelectorAll('#myNavMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('myNavMenu').className = 'nav-menu';
  });
});

// /add shadow on navigation bar on scrolling 
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}
// typing effect 
var typingEffect = new Typed(".typedText", {
  strings: ["Frontend Developer", "Java Developer", "React Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})

// scroll reveal animations 
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
// home 
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })
/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })
// effect on eduaction box 
sr.reveal('.education-box', { interval: 200 })
// heading 
sr.reveal('.top-header', {})
//  SCROLL REVEAL LEFT_RIGHT ANIMATION

//  ABOUT INFO & CONTACT INFO 
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

// about skill and form box 
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

// change active link 
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}
window.addEventListener('scroll', scrollActive)
