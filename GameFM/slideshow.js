  let slideIndex = 0;
  let timer;

  const slides = document.getElementsByClassName("slides");
  const thumbnails = document.getElementsByClassName("thumbnail");

  function autoShowSlides() {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex);
    timer = setTimeout(autoShowSlides, 7500);
  }

autoShowSlides();

  function showSlide(index) {
    clearTimeout(timer);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      thumbnails[i].classList.remove("active");
    }

    slides[index].style.display = "block";
    thumbnails[index].classList.add("active");
    slideIndex = index;

    timer = setTimeout(autoShowSlides, 7500);
  }

  function changeSlide(step) {
    slideIndex += step;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex);
  }

  function scrollThumbnails(direction) {
    const container = document.getElementById("thumbnailScroll");
    const scrollAmount = 100;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }

  // Start
  showSlide(slideIndex);