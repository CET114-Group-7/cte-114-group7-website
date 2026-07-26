var toggleBtn = document.querySelector('.navtoggle');
var navLinks = document.querySelector('.navlinks');

if (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

var contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.querySelector('.form-status');
    status.textContent = 'Thank you, your message has been sent. A member of Group 7 will get back to you soon.';
    status.classList.add('visible');
    contactForm.reset();
  });
}
