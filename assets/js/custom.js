  document.querySelectorAll('.toggle-btn').forEach(button => {
    const [showText, hideText] = button.dataset.label.split('|');
    const targetId = button.getAttribute('data-bs-target');
    const target = document.querySelector(targetId);

    target.addEventListener('show.bs.collapse', () => {
      button.textContent = hideText;
    });

    target.addEventListener('hide.bs.collapse', () => {
      button.textContent = showText;
    });
  });


  const scrollBtn = document.getElementById("scrollTopBtn");

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Optional: Show button only after scrolling down
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
