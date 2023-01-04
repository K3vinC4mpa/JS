const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other butttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      // add the class to the specific button clicked
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
      // add the class to the specific article selected
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
