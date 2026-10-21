(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var meta = document.querySelector('meta[name="theme-color"]');
  var COLORS = { light: '#FBFBFD', dark: '#000000' };

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', COLORS[theme]);
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  document.querySelectorAll('.carousel').forEach(function (car) {
    var track = car.querySelector('.slides');
    var slides = track.children;
    var dots = car.querySelector('.car-dots');
    for (var i = 0; i < slides.length; i++) dots.appendChild(document.createElement('i'));

    function current() { return Math.round(track.scrollLeft / track.clientWidth); }
    function sync() {
      var n = current();
      Array.prototype.forEach.call(dots.children, function (d, i) { d.classList.toggle('on', i === n); });
    }
    function go(n) { track.scrollTo({ left: ((n + slides.length) % slides.length) * track.clientWidth }); }

    car.querySelectorAll('.car-btn').forEach(function (b) {
      b.addEventListener('click', function () { go(current() + Number(b.dataset.dir)); });
    });
    track.addEventListener('scroll', sync, { passive: true });
    sync();
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
