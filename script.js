document.getElementById("submit").addEventListener("click", validateEmail)
function validateEmail(event) {
    event.preventDefault();
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mail = document.getElementById("email").value;
  var error = document.getElementById("error-message");
  if (!mail.match(validRegex) ) {
    error.innerHTML = "Please enter a valid email.";

  }else {
      error.innerHTML = "";
      mail = "";
  }
}

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobile-nav-items');

hamburger.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    menu.classList.toggle('show');
}