window.addEventListener("load", function () {
  setTimeout(function () {
    const overlay = document.querySelector(".loader-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";

      setTimeout(() => {
        overlay.style.display = "none";
      }, 300); // Chờ transition fade-out
    }
  }, 1000); // Thời gian loader hiển thị 
});

window.addEventListener('scroll', function () {
  const btn = document.getElementById('upBtn');
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

  const scrolled = (scrollTop + windowHeight) / docHeight;

  if (scrolled >= 0.8) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});
