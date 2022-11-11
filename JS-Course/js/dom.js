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

const heading = document.createElement("h2");
heading.innerText = "Monogatari Reference ";
document.body.prepend(heading);

// ----------------------------------- remove() & removeChild() ------------------------------ //

const toRemove = document.querySelector("h2");
toRemove.remove();

const title = document.querySelector("#title-div");

const heading2 = title.querySelector(".gahara");

title.removeChild(heading2);
