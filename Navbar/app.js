// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("links"));

  //   // using contains with if statement
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
    navToggle.style.transform = "rotate(0deg)";

    console.log(navToggle.firstElementChild);
  } else {
    links.classList.add("show-links");
    navToggle.style.transform = "rotate(90deg)";
  }

  // using the toggle method
  //   links.classList.toggle("show-links");
});
