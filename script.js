(function () {
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function () {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });

  var lb = document.getElementById('lb');
  var lbImg = lb.querySelector('img');
  function closeLb() { lb.hidden = true; }
  document.querySelectorAll('.gallery button').forEach(function (b) {
    b.addEventListener('click', function () {
      var img = b.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.hidden = false;
    });
  });
  lb.addEventListener('click', closeLb);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });

  // Open now status, Nigeria time: Mon-Sat 8am-10pm
  var s = document.getElementById('status');
  try {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Lagos', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date());
    var day = p.find(function (x) { return x.type === 'weekday'; }).value;
    var hr = parseInt(p.find(function (x) { return x.type === 'hour'; }).value, 10) % 24;
    var open = day !== 'Sun' && hr >= 8 && hr < 22;
    s.textContent = open ? 'Open now until 10pm' : 'Closed now. Open Mon to Sat, 8am to 10pm';
    s.className = 'status ' + (open ? 'open' : 'closed');
  } catch (e) { s.textContent = 'Open Mon to Sat, 8am to 10pm'; }

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
