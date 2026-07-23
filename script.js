// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navtoggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Animated circuit trace in hero (skips gracefully if not present)
  const svg = document.querySelector('.trace svg');
  if (svg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    svg.querySelectorAll('path').forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: 1800, delay: i * 220, fill: 'forwards', easing: 'ease-out' }
      );
    });
  }

  // Contact form (static demo submit)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.querySelector('.form-status');
      status.textContent = '> message queued — a member of Group 7 will respond soon.';
      status.classList.add('visible');
      form.reset();
    });
  }
});
