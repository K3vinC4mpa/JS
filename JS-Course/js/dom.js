// ------------------------------- DOM ------------------------------- //
// document.body.style.backgroundColor = "green";

// console.log(window);

// const btn = document.getElementById("btn");

// const typy = btn.nodeName;
// console.log(typy);

// const btnCss = btn.style;
// console.log(btnCss);

// window object ----> browser API
// console.log(window);

// // To find what kind of propeties or methods we have in our node Objects use console.dir()

// console.dir(document);

// document.getElementById("title").style.color = "violet";
const h1 = document.getElementById("title");
h1.style.color = "violet";

const btn = document.getElementById("btn");
btn.style.backgroundColor = "indigo";
btn.style.color = "yellow";

// getElementsByTagName ----> return a node-list/array-like object (select using index, length propety)
const headings = document.getElementsByTagName("h2");
// console.log(headings);

headings[0].style.color = "magenta";
headings[1].style.color = "magenta";
// console.log(headings.length);

const items = document.getElementsByTagName("li");
// console.log(items);
// items.forEach(function (item) {     ----> error 'cause is not a array perse
//   console.log(item);
// });

// conversion to array
const betterItems = [...items];
// console.log(betterItems);

betterItems.forEach((betterItem) => {
  betterItem.style.color = "indigo";
  //   console.log(betterItem);
});

// getElementsByClassName() --------> return node-list/ array-like object (index, length(), but no array methods)

const listItems = document.getElementsByClassName("li-class");

// console.log(listItems);

const listItemsA = [...listItems];

listItemsA.forEach(function (listItemA) {
  listItemA.style.color = "pink";
});

// querySelector() and querySelectorAll()

const result = document.querySelector("#ul-id");
result.style.backgroundColor = "tomato";

const item = document.querySelector(".li-class");
// console.log(item);

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

const listLi = document.querySelectorAll(".li-class");
// console.log(listLi);

listLi.forEach((item) => {
  //   console.log(item);
  item.style.color = "yellow";
});

// To select an element or a group of elements and decide to affect CHILDNODES

const oddities = document.querySelector(".oddities");

const allChildren = oddities.childNodes; // returns all childNodes including the whitspaces that is treated as text node
console.log(allChildren);

const children = oddities.children; // actual returns the specific elements ***
console.log(children);

console.log(oddities.firstChild);
console.log(oddities.lastChild);

// Parent elements

const headingH5 = document.querySelector("h5");
console.log(headingH5.parentElement);

parent = headingH5.parentElement;
parent.style.backgroundColor = "violet";

// previousSibling / nextSibling

const firstSibling = document.querySelector(".bigSibling");
console.log(firstSibling);

console.log((firstSibling.nextSibling.nextSibling.style.color = "yellow"));

const lastSibling = document.querySelector("#smallSibling");
console.log(lastSibling);

console.log(
  (lastSibling.previousElementSibling.previousElementSibling.style.color =
    "black")
);

// nodeValue & textContent

const itemBeef = document.getElementById("kaiki-beef");
const value = itemBeef.firstChild.nodeValue;
console.log(itemBeef.childNodes);
console.log(value);
const ezValue = itemBeef.textContent;
console.log(ezValue);
