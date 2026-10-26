const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const toggleIcon = toggle.querySelector('span');
const toggleLabel = toggle.querySelector('.theme-label');

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggleIcon.textContent = theme === 'dark' ? '☀' : '☾';
  toggleLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#120904' : '#f4e5cf';
}

const storedTheme = localStorage.getItem('cosy-pages-theme');
const preferredTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(storedTheme || preferredTheme);

toggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('cosy-pages-theme', nextTheme);
  applyTheme(nextTheme);
});

document.querySelector('#year').textContent = new Date().getFullYear();
