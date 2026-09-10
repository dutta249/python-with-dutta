(function () {
  var stored = null;
  try { stored = localStorage.getItem('pwd-theme'); } catch (e) {}
  var theme = stored || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  window.pwdToggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('pwd-theme', next); } catch (e) {}
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = next === 'light' ? '🌙 Dark' : '☀️ Light';
  };

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
  });
})();
