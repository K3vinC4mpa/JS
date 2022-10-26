// document.write("hello world!!!")
// const names = "well done";
// const drag = "queen";

// console.log(names);
// console.log(drag);

// const number = 34;
// const number2 = 2.4566;
// const number3 = "2.4566";
// console.log(number);
// console.log(number2);
// console.log(number3);

// ---------------------- operators +=, -=, ++, --, % ---------------------- //
// let number = 40;
// console.log(number);

// number += 5;
// console.log(number);

// number -= 20;
// console.log(number);

// number += 1;
// console.log(number);
// number++;
// console.log(number);

// number -= 1;
// console.log(number);
// number--;
// console.log(number);

// const slices = 10;
// const children = 3;
// const amount = slices % children;

// console.log(amount);

// ---------------- Implicit Type Conversion ----------------- //

// const name = "Kaiki";
// const lastName = "Deishuu";
// const value = name - lastName;

// console.log(value);

// let number = "10";
// let number2 = "23";
// const result = number - number2; //just work with *, / and -
// console.log(result);
// let number3 = 20;
// let number4 = "20";
// number4 = parseInt(number4);
// console.log(number3 + number4);

// ---------------- Data Types ------------------ //

// let text = "Hellow World";
// console.log(typeof text);

// let value = 23;
// console.log(typeof value);

// let light = false;
// console.log(typeof light);

// let empty = null;
// console.log(typeof empty);

// let define_me;
// console.log(typeof define_me);

// ------------------- Arrays, Functions and Objects --------------------- //

// --------Arrays
// const worth_seasson_animes = ["Mob", "CSM", "Meido War", "DIY", "Spy x Family"];
// console.log(worth_seasson_animes);
// console.log(worth_seasson_animes[2]);

// let best_seasson_anime = worth_seasson_animes[0];
// console.log(best_seasson_anime);

// ---------- function
// function hellow(frend) {
//   console.log("Hellow ma frend " + frend + " !!!");
// }

// hellow("Kaikia");

// hellow("Oiugi");
// hellow(worth_seasson_animes);

// ------------- Return
function cmConverter(value) {
  console.log("The value in cm is: " + value * 2.54 + " cm");
  return (newValue = value * 2.54);
}

const width = cmConverter(10);
const height = cmConverter(50);
const dimensions = [width, height];
console.log("The dimensions in centimeters are: " + dimensions);

// --------------- Function Expressions

const add = function (n1, n2) {
  return n1 + n2;
};
console.log(add(3, 50));

// arrow function
const multiply = (n1, n2) => n1 * n2;
console.log(multiply(2, 3));

// ------------------- Objects

// const Kaiki = {
//   carisma: 100,
//   ost: 100,
//   age: 40,
//   style: "victorian",
//   preferences: ["money", "beef", "tricks"],
//   // scamming: function () {
//   //   console.log('\t"Hello Sir, do you want an advice, you look afflicted..."');
//   // },
//   scamming() {
//     console.log('\t"Hello Sir, do you want an advice, you look afflicted..."');
//   },
// };

// console.log("Kaiki's carisma: " + Kaiki.carisma + "%.");
// console.log("Kaiki's ost: " + Kaiki.ost + "% enjoyable.");
// console.log(
//   "Kaiki's #1 preference: " + Kaiki.preferences[0] + ", of course buddy...."
// );
// console.log("Kaiki's scamming starts like: ");
// Kaiki.scamming();

// --------------------------- If Statements ----------------------------- //

if (true) {
  console.log("Big popa....");
} else {
}

const run = 2;
switch (run) {
  case 1:
    console.log("You got 1, the number.");
    break;
  case "1":
    console.log("You got 1, the string.");
    break;
  default:
    console.log("You didn't get the number, either the string...");
}
