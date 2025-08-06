const form = document.getElementById("checkout-form");
const body = document.getElementById("body");

function open_checkout() {
  body.style.display = "flex";
  form.style.display = "flex";

  // Delay để đảm bảo transition được kích hoạt
  setTimeout(() => {
    form.classList.add("active");
  }, 10);
}

body.addEventListener("click", function () {
  form.classList.remove("active");

  // Chờ transition hoàn tất rồi mới ẩn hoàn toàn
  setTimeout(() => {
    form.style.display = "none";
    body.style.display = "none";
  }, 300); // Trùng với thời gian transition
});

// Ngăn sự kiện nổi bọt
form.addEventListener("click", function (event) {
  event.stopPropagation();
});
