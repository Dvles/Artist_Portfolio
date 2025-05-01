document.addEventListener("DOMContentLoaded", () => {
  const horizontalSection = document.querySelector(".horizontal-scroll");
  const scrollContainer = document.querySelector(".projects");

  if (!horizontalSection || !scrollContainer) return;

  const horizontalScrollWidth = scrollContainer.scrollWidth;
  const viewportHeight = window.innerHeight;

  // Setting the vertical scroll height = full horizontal scroll
  horizontalSection.style.height = `${horizontalScrollWidth + viewportHeight}px`;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const sectionTop = horizontalSection.offsetTop;
    const scrollDistance = scrollY - sectionTop;

    const maxScroll = horizontalScrollWidth;

    if (scrollY >= sectionTop && scrollY <= sectionTop + maxScroll) {
      scrollContainer.style.transform = `translateX(-${scrollDistance}px)`;
    } else if (scrollY < sectionTop) {
      scrollContainer.style.transform = `translateX(0px)`;
    } else {
      scrollContainer.style.transform = `translateX(-${maxScroll}px)`;
    }
  });
});
