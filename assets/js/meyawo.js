/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
const form = document.getElementById('contactForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateName(name) {
    const trimmed = name.trim().replace(/\s+/g, ' ');
    return /^[A-Za-z]{3,}( [A-Za-z]{3,})*$/.test(trimmed);
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email) && email.endsWith('.com');
  }

  function validateTextInput(value) {
    const noSpaces = value.replace(/\s/g, '');
    return noSpaces.length >= 5;
  }

  function updateValidation() {
    let valid = true;

    if (!validateName(fullName.value)) {
      nameError.textContent = "Name must be 3+ letters, no leading or repeated spaces.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (!validateEmail(email.value)) {
      emailError.textContent = "Enter a valid email ending in .com.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (!validateTextInput(subject.value)) {
      subjectError.textContent = "Subject must be at least 5 characters, excluding spaces.";
      valid = false;
    } else {
      subjectError.textContent = "";
    }

    if (!validateTextInput(message.value)) {
      messageError.textContent = "Message must be at least 5 characters, excluding spaces.";
      valid = false;
    } else {
      messageError.textContent = "";
    }

    submitBtn.disabled = !valid;
  }

  fullName.addEventListener('input', updateValidation);
  email.addEventListener('input', updateValidation);
  subject.addEventListener('input', updateValidation);
  message.addEventListener('input', updateValidation);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!submitBtn.disabled) {
      successMessage.style.display = 'block';
      form.submit(); // Actually submit after showing success
    }
  });
