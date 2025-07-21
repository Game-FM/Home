(function () {
  const btn = document.getElementById("backToTop");
  const th = 50; // px cách đáy để show

  window.addEventListener("scroll", () => {
    const atBot =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - th;
    btn.classList.toggle("show", atBot);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
