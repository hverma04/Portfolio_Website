/* nav.js — mobile menu toggle only */
(function () {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');

  if (!toggle || !drawer) return;

  function openMenu() {
    drawer.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  /* Close on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  /* Close when a drawer link is tapped (navigation happens) */
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Close drawer if viewport grows past mobile breakpoint */
  const mq = window.matchMedia('(min-width: 769px)');
  mq.addEventListener('change', function (e) {
    if (e.matches) closeMenu();
  });
})();
