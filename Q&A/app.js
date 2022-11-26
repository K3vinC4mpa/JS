//using selectors inside the element

// const questions = document.querySelectorAll(".question");
// console.log(questions);

// questions.forEach((question) => {
//   //   console.log(question);
//   const btn = question.querySelector(".question-btn");
//   console.log(btn);
//   btn.addEventListener("click", () => {
//     console.log(question.classList);

//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//     console.log(question.classList);
//   });
// });

// traversing the dom
const btns = document.querySelectorAll(".question-btn");

// const questions = document.querySelectorAll(".question");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;

    // using the same btns nodeList
    btns.forEach((item) => {
      const questionChecked = item.parentElement.parentElement;
      console.log(item.parentElement.parentElement);
      if (questionChecked !== question) {
        questionChecked.classList.remove("show-text");
      }
    });

    // This way needs the questions nodeList
    // questions.forEach((item) => {
    //   if (item !== question) {
    //     item.classList.remove("show-text");
    //   }
    // });
    question.classList.toggle("show-text");
  });
});
