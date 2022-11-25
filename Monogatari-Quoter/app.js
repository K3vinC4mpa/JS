// local reviews data
const quoties = [
  {
    id: 1,
    name: "hachikuji mayoi",
    occupation: "wandering spirit",
    img: "./gifs/conangatari.gif",
    quotes: [
      "I know love. The convenience store was selling it. For 298 yen.",
      "I'm sure there's a reason that, even after I stopped being lost, I stayed here. I won't leave until I know what that reason is.",
      "Sharing your secret with someone means you involve them in your problems. It may make things easier for you, but your family could end up suffering for it too.",
      "The body of a child and the brains of an adult.",
    ],
  },
  {
    id: 2,
    name: "kaiki deishuu",
    occupation: "conman",
    img: "./gifs/deishuu-kaiki-bakemonogatari.gif",
    quotes: [
      "Humans have a desire for truth or they have a desire to what they know is the truth. In other words, what the truth is exactly second to that. Be careful of what is the truth and what is lie. In other words, always doubt yourself. Harbor an inner devil as you read along… and I won't forget to add that by that point, you might have already fallen into my trap.",
      "There isn't a problem that can't be solved by money.",
      "They say money talks to you when you are in hell, so I'm happy that I got to make some money in the end, so I won't feel alone",
    ],
  },
  {
    id: 3,
    name: "kanbaru suruga",
    occupation: "araragi's sex slave",
    img: "./gifs/suruga-kanbaru-monogatari.gif",
    quotes: ["I'm Kanbaru Suruga. Currently employed as Araragi's sex slave."],
  },
  {
    id: 4,
    name: "oshino meme",
    occupation: "oddity specialist",
    img: "./gifs/oshino-meme.gif",
    quotes: [
      "You look so lively. Did something good happen?",
      "If praying does not work, and words are ineffective… what’s left is to fight.",
    ],
  },
];

// select items

const img = document.getElementById("imagegatari");
const author = document.getElementById("author");
const occupation = document.getElementById("occupation");
const quote = document.getElementById("quote");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set random starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showCharacter();
});

// show person based on item
function showCharacter() {
  const item = quoties[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  occupation.textContent = item.occupation;
  quote.textContent = "“" + item.quotes[getRandomNumber(item.quotes)] + "”";
}

// show next item/character
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > quoties.length - 1) {
    currentItem = 0;
  }
  showCharacter();
});

// show prev item/character
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = quoties.length - 1;
  }
  showCharacter();
});

randomBtn.addEventListener("click", () => {
  currentItem = getRandomNumber(quoties);
  showCharacter();
});

// get a random number for specified array
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}
