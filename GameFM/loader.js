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
  }, 1000); // Thời gian loader hiển thị (2 giây)
});
