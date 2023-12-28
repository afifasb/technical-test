// For product card scroll
const productContainer = document.querySelector(".product-container");
const productRow = document.querySelector(".product-row");
const nextButton = document.querySelector(".next-button");
const cardWidth = document.querySelector(".product-card").offsetWidth;

function scrollProducts() {
  const scrollValue = cardWidth;
  productRow.style.transform = `translateX(-${scrollValue}px)`;

  const canScrollLeft = productContainer.scrollLeft > 0;

  nextButton.style.display = canScrollLeft ? "block" : "none";
}

nextButton.addEventListener("click", scrollProducts);

//For Scrolling to top button
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", function () {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

//For expand/collapse footer content
function toggleFooterContent() {
  const footerContent = document.getElementById("footer-content");
  footerContent.classList.toggle("collapsed");
}

function collapseAll() {
  const paragraphs = document.querySelectorAll("#footer-content p");
  paragraphs.forEach((paragraph) => {
    paragraph.style.display = "none";
  });
}

const footerTitle = document.getElementById("footer-title");
footerTitle.addEventListener("click", toggleFooterContent);
