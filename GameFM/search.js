document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search-input");
    const button = document.getElementById("search-button");

    function handleSearch() {
      const keyword = input.value.trim();
      if (keyword) {
        localStorage.setItem("searchKeyword", keyword);
        window.location.href = "result.html"; // Điều hướng sang trang kết quả
      }
    }

    // Khi nhấn nút
    button.addEventListener("click", handleSearch);

    // Khi nhấn Enter
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
  });