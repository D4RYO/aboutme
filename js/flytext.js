document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  document.querySelectorAll(".fly-in-text").forEach((element) => {
    observer.observe(element);
    element.classList.add("fly-out-text");
  });
});
