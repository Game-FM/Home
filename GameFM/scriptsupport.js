document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openFormBtn");
  const overlay = document.getElementById("overlay");
  const popupForm = document.getElementById("popupForm");

  // Mở form khi click nút
  openBtn.addEventListener("click", function (e) {
    e.preventDefault(); // ngăn reload trang
    overlay.style.display = "flex";
  });

  // Đóng form nếu click ra ngoài
  overlay.addEventListener("click", function (e) {
    if (!popupForm.contains(e.target)) {
      overlay.style.display = "none";
    }
  });
});
