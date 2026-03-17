/* global Typed, ScrollReveal */

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

// eslint-disable-next-line no-unused-vars
function navigateTo(value) {
  if(value === "certifications/index2.html"){
    window.open(value , '_blank');
  }
  else {
      window.location.href = value;
  }
  // to stop double opening of the page 
  document.getElementById('moreOptions').value = "";
  
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
/* eslint-disable no-unused-vars */
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
  strings: ["DevOps Engineer", "Automation Engineer"  ],
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
// text-box hover effect 
// sr.reveal('.text-box' , {interval: 200})
sr.reveal('.containerExp' , {interval: 200})
// heading 
sr.reveal('.top-header', {})

//  ABOUT INFO & CONTACT INFO 

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
srLeft.reveal('.project-box1', { delay: 100 })

// about skill and form box 

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })
srRight.reveal('.project-section1', { delay: 100 })

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

// THEME TOGGLE: light / dark
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('theme-toggle')
  const hirebtn = document.getElementById('hiremebtn').style = "color: white; text-decoration: none;";
  if (!toggle) return

  var icon = toggle.querySelector('i')

  function setIcon (isDark) {
    if (!icon) return
    if (isDark) {
      icon.classList.remove('uil-moon')
      icon.classList.add('uil-sun')
      toggle.setAttribute('aria-label', 'Switch to light theme')
    } else {
      icon.classList.remove('uil-sun')
      icon.classList.add('uil-moon')
      toggle.setAttribute('aria-label', 'Switch to dark theme')
    }
  }

  var storedTheme = null
  try {
    storedTheme = window.localStorage.getItem('theme')
  } catch (e) {
    storedTheme = null
  }

  var prefersDark = false
  if (window.matchMedia) {
    prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  var useDark = storedTheme === 'dark' || (!storedTheme && prefersDark)
  if (useDark) {
    document.body.classList.add('dark-theme')
  }
  setIcon(useDark)

  toggle.addEventListener('click', function () {
    var isDarkNow = document.body.classList.toggle('dark-theme')
    try {
      window.localStorage.setItem('theme', isDarkNow ? 'dark' : 'light')
    } catch (e) {}
    setIcon(isDarkNow)
  })
})

// ai agent 
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const chatCloseBtn = document.getElementById("chat-close-btn");
const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

// Toggle chat
chatToggle.onclick = () => {
  chatBox.classList.toggle("active");
  input.focus();
};

// Close chat
chatCloseBtn.onclick = () => {
  chatBox.classList.remove("active");
};

// Send message
async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  // Show user message
  const userMessageDiv = document.createElement("div");
  userMessageDiv.className = "chat-message user-message";
  userMessageDiv.innerHTML = `<div class="message-content">${text}</div>`;
  messages.appendChild(userMessageDiv);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  // Show "Shivam is typing..." indicator
  const typingDiv = document.createElement("div");
  typingDiv.className = "chat-message bot-message typing-indicator";
  typingDiv.innerHTML = `<div class="message-content"><span>Shivam is typing</span><span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></div>`;
  messages.appendChild(typingDiv);
  messages.scrollTop = messages.scrollHeight;

  // Call your backend
  try {
    const res = await fetch(
      "https://ai-portfolio-agent.sharma-shiv7027.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      }
    );

    const data = await res.json();

    // Remove typing indicator
    typingDiv.remove();

    // Show AI reply
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "chat-message bot-message";
    botMessageDiv.innerHTML = `<div class="message-content">${data.reply}</div>`;
    messages.appendChild(botMessageDiv);
    messages.scrollTop = messages.scrollHeight;
  } catch (error) {
    // Remove typing indicator on error
    typingDiv.remove();
    const errorDiv = document.createElement("div");
    errorDiv.className = "chat-message bot-message";
    errorDiv.innerHTML = `<div class="message-content">Sorry, I couldn't process your message. Please try again.</div>`;
    messages.appendChild(errorDiv);
    messages.scrollTop = messages.scrollHeight;
  }
}

sendBtn.onclick = sendMessage;

// Enter key support
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});