const form = document.getElementById("checkout-form");
const body = document.getElementById("body");

function open_checkout() {
  form.style.display = "flex"; // flex giúp căn giữa nội dung
  body.style.display = "flex";
  form.style.transition = "opacity 0.3s ease";
  form.style.transform = "opacity 0.3s ease";
}

body.addEventListener("click",function (){
    form.style.display = "none";
    body.style.display = "none";
})

// Ngăn sự kiện nổi bọt khi click vào nội dung
form.addEventListener("click", function (event) {
  event.stopPropagation();
});
