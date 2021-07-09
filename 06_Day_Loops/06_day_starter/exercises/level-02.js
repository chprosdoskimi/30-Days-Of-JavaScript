// Exercises: Level 2
// 1. Develop a small script which generate any number of characters random id:

//       fe3jo1gl124g

//       xkqci4utda1lmbelpkm03rba

let randomChar = "";
let n = 11;
// let n = prompt('Enter the character size: ');
for (let i = 0; i < n; i++) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  randomChar += characters.charAt(Math.floor(Math.random() * (61 - 0 + 1)) + 0);
}
console.log(randomChar);

// 1. Write a script which generates a random hexadecimal number.

//     '#ee33df'

let randHexa ="#"
for (let i = 0; i < 6; i++) {
  let hexadecimal = '0123456789abcdef';
  randHexa += hexadecimal.charAt(Math.floor(Math.random() * (hexadecimal.length-1 - 0 + 1)) + 0);
}
console.log(randHexa);

// 1. Write a script which generates a random rgb color number.

//     rgb(240,180,80)

const red = Math.floor(Math.random()*255);
const green = Math.floor(Math.random()*255);
const blue = Math.floor(Math.random()*255);

console.log(`rgb(${red},${green},${blue})`);

// 1. Using the above countries array, create the following new array.

//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

// 1. Using the above countries array, create an array for countries length'.

//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countrieslength = [];
for(let i = 0; i<countries.length; i++){
  countrieslength[i] = countries[i].length;
}
console.log(countrieslength);

// 1. Use the countries array to create the following array of arrays:

//       [
//       ['Albania', 'ALB', 7],
//       ['Bolivia', 'BOL', 7],
//       ['Canada', 'CAN', 6],
//       ['Denmark', 'DEN', 7],
//       ['Ethiopia', 'ETH', 8],
//       ['Finland', 'FIN', 7],
//       ['Germany', 'GER', 7],
//       ['Hungary', 'HUN', 7],
//       ['Ireland', 'IRE', 7],
//       ['Japan', 'JAP', 5],
//       ['Kenya', 'KEN', 5]
//     ]

// const countriesDetail = [];
// for (let i = 0; i < countries.length; i++) {
//   countriesDetail[i] = [[countries[i],countries[i].slice(0,3).toUpperCase(), countries[i].length]];
// }
// console.log(countriesDetail);

// 2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

//     ['Finland', 'Iceland']
const landCountries = [];

for (let i = 0; i < countries.length; i++) {
  if(countries[i].match(/land/gi)){
    landCountries[i] = countries[i];
  }
}
console.log(landCountries);

// 3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

//     ['Albania', 'Bolivia','Ethiopia']

// 4. Using the above countries array, find the country containing the biggest number of characters.

//       Ethiopia

// 5. Using the above countries array, find the country containing only 5 characters.

//     ['Japan', 'Kenya']

// 6. Find the longest word in the webTechs array
// 7. Use the webTechs array to create the following array of arrays:

//     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// 8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// 9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// 10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// 11. Print all the elements of array as shown below.

//       const fullStack = [
//         ['HTML', 'CSS', 'JS', 'React'],
//         ['Node', 'Express', 'MongoDB']
//       ]

//       HTML
//       CSS
//       JS
//       REACT
//       NODE
//       EXPRESS
//       MONGODB
