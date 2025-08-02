function setLanguage(lang) {
    var langs = ['vi', 'en'];

    langs.forEach(function (l) {
      var elems = document.querySelectorAll('.lang-' + l);
      elems.forEach(function (el) {
        el.style.display = (l === lang) ? '' : 'none';
      });
    });

    var buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    var activeBtn = document.getElementById('lang-' + lang);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLanguage('vi');
  });