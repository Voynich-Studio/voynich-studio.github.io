const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  if (next === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
}

function toggleMenu() {
  document.querySelector('.mobile-menu')?.classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 8);
});