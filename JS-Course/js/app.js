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

// // ------------- Return
// function cmConverter(value) {
//   console.log("The value in cm is: " + value * 2.54 + " cm");
//   return (newValue = value * 2.54);
// }

// const width = cmConverter(10);
// const height = cmConverter(50);
// const dimensions = [width, height];
// console.log("The dimensions in centimeters are: " + dimensions);

// // --------------- Function Expressions

// const add = function (n1, n2) {
//   return n1 + n2;
// };
// console.log(add(3, 50));

// // arrow function
// const multiply = (n1, n2) => n1 * n2;
// console.log(multiply(2, 3));

// // ------------------- Objects

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

// // ---------- If Statements

// if (true) {
//   console.log("Big popa....");
// } else {
// }

// // ---------------- switch
// const run = 2;
// switch (run) {
//   case 1:
//     console.log("You got 1, the number.");
//     break;
//   case "1":
//     console.log("You got 1, the string.");
//     break;
//   default:
//     console.log("You didn't get the number, either the string...");
// }

// // --------------- Loops
// let c = 10;
// while (c >= 0) {
//   console.log("Counter: " + c);
//   c--;
// }

// c = 0;

// do {
//   c++;
//   console.log("Counter: " + c);
// } while (c < 10);

// for (let i = 10; i >= 0; i--) {
//   console.log("Count: " + i);
// }

// -------------------------- String Methods ----------------------------- //
// let text = "  Kaiki Deishuu  ";

// console.log(text.length);
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf("K"));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.trim());
// console.log(text.trim().toLowerCase().startsWith("kaiki"));
// console.log(text.includes("Deishuu"));
// console.log(text.slice(0, 5));
// console.log(text.slice(0, -1));
// console.log(text.slice(-6));

// console.log(text.replaceAll("i", "o"));

// var str = "javablog";
// var chr = "y";
// var pos = str.indexOf("a");
// console.log(pos);
// // Add character 2 at position 4 in str

// var output = [str.slice(0, pos + 1), chr, str.slice(pos)].join("");
// console.log(output);
// console.log(typeof output);

// -----------------------------Template Literals --------------------------- //

// const name = "Kaiki Deishuu";
// const value = `Hello, It's ${name}, gimme your money Sir... I need \xA5${
//   100 * 10000
// } yens for the job.`;
// console.log(value);

// ----------------------------- Array Methods and Propeties ----------------------- //

// let names = [
//   "Deishuu",
//   "Meme",
//   "Koyomi",
//   "Hitagi",
//   "Shinobu",
//   "Nadeko",
//   "Ougi",
//   "Tsubasa",
//   "Karen",
//   "Tsukihi",
//   "Suruga",
//   "Sodachi",
//   "Yozuru",
//   "Yotsugi",
// ];

// // Length
// console.log(names.length);
// console.log(names[names.length - 1]);

// let lastnames = [
//   "Kaiki",
//   "Oshino",
//   "Araragi",
//   "Senjougahara",
//   "Sengoku",
//   "Hanekawa",
//   "Kanbaru",
//   "Oikura",
//   "Ononoki",
// ];

// // Concat
// const allNames = names.concat(lastnames);
// console.log(allNames);
// console.log(allNames.reverse());

// // Unshift (add at the start)
// allNames.unshift("Episode");
// console.log(allNames);

// // Shift (remove at the start)
// allNames.shift("Episode");
// console.log(allNames);

// // Push (add at the end)
// allNames.push("Guillotine");
// console.log(allNames);

// // Pop
// allNames.pop();
// console.log(allNames);

// // Splice -> mutate original array

// const specificNames = allNames.splice(0, 3  );
// console.log(specificNames);
// console.log(allNames);

// ------------------------ Array and loops ---------------------------- //

// const names = ["Karen", "Tsukihi", "Koyomi"];
// const lastName = "Araragi";
// let newArray = [];

// for (let i = 0; i < names.length; i++) {
//   newArray.push(`${names[i]} ${lastName}`);
// }

// console.log(names);
// console.log(newArray);

// --------------- Functions, returns, if, arrays, loops ------------------------ //

// const gas = [100, 150, 200];
// const food = [1500, 2000, 1200, 1000];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 500) {
//     console.log("Too much for the body!!!");
//     return total;
//   }
//   return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
// });

// ---------------- Reference VS  Value -------------------- //

// When you change primitive values they dont affect the reference, but when you change non-primitive values the reference is affected...

// Primitive (Strings, numbers, booleans, Undefined, Null)
// const n1 = 1;
// let n2 = n1;
// n2 = 6;
// console.log(`First value: ${n1}`);
// console.log(`Second value: ${n2}`);

// // Non-primitive (Arrays, Objetcts, Linked list)
// let person = { name: "Hitagi" };
// let personTwo = person;
// personTwo.name = "Tsubasa";
// console.log(`First person: ${person.name}`);
// console.log(`Second person: ${personTwo.name}`);

// let pets = ["Dog", "Cat"];
// let petsTwo = [...pets];
// petsTwo[1] = "Bird";
// console.log(`First pet: ${pets}`);
// console.log(`Second pet: ${petsTwo}`);

// ------------------ Operator types ------------------ //

// // unary operator
// let text = "sometext";
// console.log(typeof text); // operand

// // binary operator ---> assignment
// let number = 10;
// let n2 = 10 * 10;

// // ternary operator ---------> condition ? true : false ;

// const value = 10 > 5;
// value ? console.log("It's true") : console.log("It's false");

// JS start with te local scope,

// const globalNumber = 3;

// function add(n1, n2) {
//   const globalNumber = 2;
//   const result = n1 + n2 + globalNumber;

//   function multiply() {
//     const globalNumber = 1;
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult);
//   }
//   multiply();
//   return result;
// }

// console.log(add(5, 5));

// ----------------------- Callback Functions ------------------------- //

// -------------------- Bad way
// function greetMorning(name) {
//   const myName = "Kaiki";
//   console.log(`Good Morning Mr. ${myName}-san. It's ${name} desu.`);
// }

// function greetAfternoon(name) {
//   const myName = "Kaiki";
//   console.log(`Good Afternoon Mr. ${myName}-san. It's ${name} desu.`);
// }
// greetMorning("Kanbaru");
// greetAfternoon("Kanbaru");

// ---------------------- Good way
// // High Order Function Greeting
// function greet(name, cb) {
//   const myName = "Kanbaru";
//   console.log(`${cb(name)}-san, it's ${myName} desu.`);
// }

// // Callback Functions for the time of the greeting
// function morning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//   return `Good afternoon ${name.toUpperCase()}`;
// }
// function night(name) {
//   return `Good night ${name.toUpperCase()}`;
// }

// greet("Kaiki", morning);
// greet("Mayoi", afternoon);
// greet("Araragi", night);

// --------------------- Powerfull Array Methods ------------------------- //

// foreach --> doesn't return new array...

// const characters = [
//   {
//     fullname: "Senjougahara Hitagi",
//     age: 17,
//     oddity: "crab",
//     id: 1,
//     popularity: 100,
//   },
//   {
//     fullname: "Kanbaru Suruga",
//     age: 16,
//     oddity: "monkey",
//     id: 2,
//     popularity: 80,
//   },
//   {
//     fullname: "Sengoku Nadeko",
//     age: 14,
//     oddity: "snake",
//     id: 3,
//     popularity: 60,
//   },
//   {
//     fullname: "Oshino Shinobu",
//     age: 2000,
//     oddity: "vampire",
//     id: 4,
//     popularity: 200,
//   },
//   {
//     fullname: "Hachikuji Mayoi",
//     age: 18,
//     oddity: "snail",
//     id: 5,
//     popularity: 150,
//   },
// ];

// // separate pass function
// // function showCharacter(character) {
// //   console.log(character.oddity.toUpperCase());
// // }
// // characters.forEach(showCharacter);

// // function directly
// characters.forEach(function (character) {
//   console.log(character.fullname);
// });

// map --> it does return a new array, doesn't change size of original array.

// const ages = characters.map(function (character) {
//   return character.age;
// });

// console.log(ages);

// const newCharacters = characters.map(function (character) {
//   return {
//     fullname: character.fullname.toUpperCase(),
//     age: character.age + 1,
//   };
// });

// console.log(newCharacters);

// const names = characters.map(function (character) {
//   return `<li  style="font-size: 30px; color:orange;">${character.fullname}</li>`;
// });

// console.log(names);

// document.body.innerHTML = names.join("");

// filter --> does return new array, can manipulate the size of new array, return based on condition.

// const legalWaifu = characters.filter(function (character) {
//   return character.age >= 18;
// });
// console.log(legalWaifu);

// find --> return a single instance, first match if not undefined, great to get unique value.

// const hunters = ["Episode", "Guillotine", "Yozuru"];

// console.log(
//   hunters.find(function (hunter) {
//     return hunter === "Guillotine";
//   })
// );

// const character = characters.find(function (character) {
//   return character.id === 1;
// });

// console.log(character);

// // find() can access to the propeties because generates an object.
// console.log(character.fullname);

// const character2 = characters.filter(function (character) {
//   return character.id === 1;
// });

// // filter just access to position because is an array (that in this case has objects in every position).
// console.log(character2[0].fullname);

// reduce --> iterates, uses callback, reduce to a single value - number, array, object. Use acc (accumulate) and curr (current iteration)

// const totalPopularity = characters.reduce(function (acc, currItem) {
//   acc += currItem.popularity;
//   console.log(acc);
//   console.log(currItem);

//   return acc;
// }, 0);

// console.log(totalPopularity);

// ----------- Math

// const number = 4.123124;
// const result = Math.floor(number);

// const number = 4.123124;
// const result = Math.ceil(number);

// const number = 81;
// const result = Math.sqrt(number);

// const result = Math.PI;

// const result = Math.min(1, 2, 3, 4, 5, 0);

// const result = Math.max(1, 2, 3, 4, 5, 0);

// const result = Math.random() * 100;
// const result = Math.floor(Math.random() * 100 + 1);
// console.log(result);

// ----------- Date

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const date = new Date("1/1/2000");

// console.log(date);

// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const currentDate = `${days[day]}, ${date.getDate()} ${
//   months[month]
// } ${date.getFullYear()}`;
// console.log(currentDate);

// document.body.innerHTML = currentDate + " was my birthday...";
