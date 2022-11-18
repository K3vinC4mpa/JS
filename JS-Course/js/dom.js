// // ------------------------------- DOM ------------------------------- //
// // document.body.style.backgroundColor = "green";

// // console.log(window);

// // const btn = document.getElementById("btn");

// // const typy = btn.nodeName;
// // console.log(typy);

// // const btnCss = btn.style;
// // console.log(btnCss);

// // window object ----> browser API
// // console.log(window);

// // // To find what kind of propeties or methods we have in our node Objects use console.dir()

// // console.dir(document);

// -------------------------- getElementById() ---------------------------------------- //

// // document.getElementById("title").style.color = "violet";
// const h1 = document.getElementById("title");
// h1.style.color = "violet";

// const btn = document.getElementById("btn");
// btn.style.backgroundColor = "indigo";
// btn.style.color = "yellow";

// -------------------------- getElementsByTagName() ------------------------------ //
// // return a node-list/array-like object (select using index, length propety)

// const headings = document.getElementsByTagName("h2");
// // console.log(headings);

// headings[0].style.color = "magenta";
// headings[1].style.color = "magenta";
// // console.log(headings.length);

// const items = document.getElementsByTagName("li");
// // console.log(items);
// // items.forEach(function (item) {     ----> error 'cause is not a array perse
// //   console.log(item);
// // });

// // conversion to array
// const betterItems = [...items];
// // console.log(betterItems);

// betterItems.forEach((betterItem) => {
//   betterItem.style.color = "indigo";
//   //   console.log(betterItem);
// });

// -------------------------- getElementsByClassName() ------------------------------------ //
// // return node-list/ array-like object (index, length(), but no array methods)

// const listItems = document.getElementsByClassName("li-class");

// // console.log(listItems);

// const listItemsA = [...listItems];

// listItemsA.forEach(function (listItemA) {
//   listItemA.style.color = "pink";
// });

// ---------------------- querySelector() & querySelectorAll() ----------------------------- //

// const result = document.querySelector("#ul-id");
// result.style.backgroundColor = "tomato";

// const item = document.querySelector(".li-class");
// // console.log(item);

// const lastItem = document.querySelector("li:last-child");
// // console.log("Last  " + lastItem);
// // lastItem.style.backgroundColor = "blue";

// const listLi = document.querySelectorAll(".li-class");
// // console.log(listLi);

// listLi.forEach((item) => {
//   //   console.log(item);
//   item.style.color = "yellow";
// });

// ------------------------------- Child Nodes ----------------------------- //
// // To select an element or a group of elements and decide to affect

// const oddities = document.querySelector(".oddities");

// const allChildren = oddities.childNodes; // returns all childNodes including the whitspaces that is treated as text node
// console.log(allChildren);

// const children = oddities.children; // actual returns the specific elements ***
// console.log(children);

// console.log(oddities.firstChild);
// console.log(oddities.lastChild);

// -------------------------------  Parent elements --------------------------- //

// const headingH5 = document.querySelector("h5");
// console.log(headingH5.parentElement);

// parent = headingH5.parentElement;
// parent.style.backgroundColor = "violet";

// ------------------------------- previousSibling / nextSibling --------------------- //

// const firstSibling = document.querySelector(".bigSibling");
// console.log(firstSibling);

// console.log((firstSibling.nextSibling.nextSibling.style.color = "yellow"));

// const lastSibling = document.querySelector("#smallSibling");
// console.log(lastSibling);

// console.log(
//   (lastSibling.previousElementSibling.previousElementSibling.style.color =
//     "black")
// );

// ------------------------ nodeValue & textContent -------------------------- //
// To get the content of a element (text inside the element)

// const itemBeef = document.getElementById("kaiki-beef");
// console.log(itemBeef.childNodes);
// const value = itemBeef.firstChild.nodeValue;
// console.log(value);

// const ezValue = itemBeef.textContent;
// console.log(ezValue);

// -------------------- getAttribute() & setAttribute() ---------------------------- //

// // various elements using querySelectorAll()
// const liElements = document.querySelectorAll("#id-li");
// console.log(liElements);
// liElements.forEach((liElement) => {
//   const classValue = liElement.getAttribute("class");
//   console.log(classValue);
// });

// const liElementsA = [...liElements];
// console.log(liElementsA);
// console.log(liElementsA[0].getAttribute("class"));
// console.log(liElementsA[1].getAttribute("class"));

// // one element using querySelector()
// const liElement = document.querySelector("#id-li:last-child");
// console.log(liElement);
// const classValue = liElement.getAttribute("class");
// console.log(classValue);

// // from a href using getElementById()
// const linkElement = document.getElementById("id-href");
// const linkValue = linkElement.getAttribute("href");
// console.log(linkValue);

// const lastElement = linkElement.nextElementSibling;
// lastElement.setAttribute("class", "class-li-2.1");
// lastElement.textContent = "I change my clas to a new version :3";
// console.log(lastElement);
// const lastElementClassValue = lastElement.getAttribute("class");
// console.log(lastElementClassValue);

// --------------------------- className & classList ----------------------- //
// applies classes from css and so on...

// const ichi = document.getElementById("ichi");
// const ni = document.getElementById("ni");
// const san = document.getElementById("san");

// console.log(ichi.className);

// ni.className = "text";

// san.classList.add("colors", "text");
// console.log(san.classList);

// ichi.classList.remove("colors");
// console.log(ichi.classList.contains("colors"));
// ni.classList.replace("text", "text2");
// console.log(ni.classList);

// --------------------------- CreateElement, createTextNode & appendChild  ------------------------------- //

// const titleDiv = document.querySelector("#title-div");

// // create empty element
// const bodyDiv = document.createElement("div");

// // create textNode and added to bodyDiv
// const text = document.createTextNode("All my hommies eat donuts...");
// bodyDiv.appendChild(text);

// // add bodyDiv to or body
// document.body.appendChild(bodyDiv);

// const heading = document.createElement("h2");
// const textHeading = document.createTextNode("Shitsure shine...");
// heading.appendChild(textHeading);
// heading.classList.add("kisshot");
// titleDiv.appendChild(heading);
// console.log(titleDiv.children);

// // insertBefore('element','location') -->> used to insert elements too
// const jsScript = document.getElementById("script-id");
// document.body.insertBefore(bodyDiv, jsScript); // moving the bodyDiv before the scripts

// // replaceChild('new', 'old');

// const smallHeading = document.createElement("h5");
// const smallText = document.createTextNode("wazatou sha nai");
// smallHeading.classList.add("gahara");
// smallHeading.appendChild(smallText);

// titleDiv.replaceChild(smallHeading, heading);

// ----------------------------------- prepend() & innerText() ------------------------------- //

// const heading = document.createElement("h2");
// heading.innerText = "Monogatari Reference ";
// document.body.prepend(heading);

// ----------------------------------- remove() & removeChild() ------------------------------ //

// const toRemove = document.querySelector("h2");
// toRemove.remove();

// const title = document.querySelector("#title-div");

// const heading2 = title.querySelector(".gahara");

// title.removeChild(heading2);

// ----------------------------- innerText vs textContent() ----------------------------------- //

// const list = document.getElementById("ichi");
// const div = document.getElementById("ni");
// const li = document.querySelector(".ichimonogatari");

// console.log(div.textContent);
// console.log(div.innerHTML);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const ul = document.createElement("ul");
// ul.innerHTML = `${list.innerHTML}`;
// console.log("My new ul list: \n" + ul.innerHTML);

// const idScript = document.getElementById("script-id");
// document.body.insertBefore(ul, idScript);
// console.log(document.body.innerHTML);

// ----------------------------------- CSS ---------------------------------------- //

// const random = document.querySelector("#ni");

// // random.style.backgroundColor = "red";
// // random.style.color = "yellow";

// random.classList.add("colors");

// ------------------------------------ Events ------------------------------------ //

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h1");

// function changeColors() {
//   let hasClass = heading.classList.contains("colors");
//   if (hasClass) {
//     heading.classList.remove("text2");
//   } else {
//     heading.classList.add("text2");
//   }
// }

// // btn.addEventListener("click", changeColors);

// btn.addEventListener("click", () => {
//   const myString = document.getElementById("tongueTwister");

//   let regEx = /na/gi;
//   let newString = myString.textContent.replace(regEx, "nya");
//   newString = newString.charAt(0).toUpperCase() + newString.slice(1);
//   console.log(newString);
//   myString.textContent = newString;
// });

// -------------------------- mouse events -------------------------- //

// const heading = document.getElementsByName("h1");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   console.log("Clicked");
// });
// btn.addEventListener("mousedown", () => {
//   console.log("mouse down");
// });
// btn.addEventListener("mouseup", () => {
//   console.log("mouse up");
// });
// heading[0].addEventListener("mouseenter", () => {
//   heading.forEach((i) => {
//     i.classList.add("colors");
//   });
//   // heading[0].classList.add("text2", "colors");
// });
// heading[0].addEventListener("mouseleave", () => {
//   heading.forEach((i) => {
//     i.classList.remove("colors");
//   });
// });

// ------------------------- key events -------------------------------------- //

// const nameInput = document.getElementById("name");

// keypress
// nameInput.addEventListener("keypress", () => {
//   console.log("u pressed a key");
// });

// keydown
// nameInput.addEventListener("keydown", () => {
//   console.log("u pressed a key down");
// });

// keyup
// nameInput.addEventListener("keyup", () => {
//   console.dir(nameInput.value);
// });

// ---------------------------- Event Object ---------------------------------- //

// e, evt
// info about triggered event

// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");
// const link = document.getElementById("link");

// heading.addEventListener("click", function (e) {
//   console.log(e.currentTarget);
//   // console.log(e.type); // the type of event going = click,mouseenter, mouseleave, etc...
//   console.log(this);
//   e.currentTarget.classList.add("colors");
// });
// // heading.addEventListener("click", (e) => {
// //   console.log(e.currentTarget);v
// //   // console.log(e.type); // the type of event going = click,mouseenter, mouseleave, etc...
// //   console.log(this);
// //   e.currentTarget.classList.add("colors");
// // });

// function preventDefaultBehavior(e) {
//   e.preventDefault();
// }

// link.addEventListener("click", preventDefaultBehavior);

// -------------------- target vs currentTarget --------------------- //

// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     //  console.log(e.currentTarget);
//     //   e.currentTarget.classList.add("gahara");
//     console.log("Target propetie: ", e.target);
//     e.target.classList.add("gahara");
//   });
// });

// ------------------------- propagation, bubbling & capturing ------------------ //

// const container = document.querySelector(".container");
// const list = document.querySelector(".list-items");

// // bubbling ---> happens by default, if we click the deepest element it's gonna show up.
// function showBubbling(e) {
//   console.log("currentTarget:", e.currentTarget);
//   // console.log("Target:", e.target);
//   // if (e.target.classList.contains("link")) {
//   //   console.log("You clicked on the link");
//   // }
// }

// function stopPropagation(e) {
//   console.log("You clicked list");
//   e.stopPropagation();
// }

// list.addEventListener("click", showBubbling, { capture: true });
// container.addEventListener("click", showBubbling), { capture: true };
// document.addEventListener("click", showBubbling, { capture: true });
// window.addEventListener("click", showBubbling, { capture: true });

// ----------------- select dynamic elements

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");
// // const heading = document.querySelector(".heading");

// function sayHellou(e) {
//   console.log("Hellou there...");
// }
// // heading.addEventListener("click", sayHellou);

// btn.addEventListener("click", () => {
//   const element = document.createElement("h1");
//   element.classList.add("gahara", "text2");
//   element.textContent = `I'm inside the container`;
//   container.appendChild(element);
// });

// container.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   if (e.target.classList.contains("gahara", "text2")) {
//     console.log("Hellow buddy....");
//   }
// });

// ---------------------- submit event listener , prevent default & how get value ------------------------------- //

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const password = document.getElementById("password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form submitted");
//   console.log(name.value);
//   console.log(password.value);
// });

// ----------------------- Web Storage API --------------------------- //
// sessionStorage, localStorage,
// methods are: setItem, getItem, removeItem, clear

// localStorage.setItem("name", "Kaiki");
// sessionStorage.setItem("name", "Kaiki");

// localStorage.setItem("surname", "Senshougahara");
// localStorage.setItem("oddity", "Crab");
// localStorage.setItem("firstname", "Hitagi");

// const firstname = localStorage.getItem("firstname");
// console.log(firstname);
// localStorage.removeItem("oddity");
// localStorage.clear();

// ------------------------- JSON.stringify & JSON.parse ------------------ //

//JSON.stringify -------> convert to JSON string an object or array.
const friends = { f1: "Hitagi", f2: "Nadeko", f3: "Tsubasa" };
const friends2 = ["Koyomi", "Suruga", "Mayoi"];
localStorage.setItem("Friends", JSON.stringify(friends));

// JSON.parse ----> parse a JSON string to a original form (object or array, etc..)
const values = JSON.parse(localStorage.getItem("Friends"));

console.log(values.f3);

let oddities;

if (localStorage.getItem("oddities")) {
  oddities = JSON.parse(localStorage.getItem("oddities"));
} else {
  oddities = [];
}

console.log(oddities);

// oddities.push("Crab");
oddities.push("Monkey");

localStorage.setItem("oddities", JSON.stringify(oddities));
