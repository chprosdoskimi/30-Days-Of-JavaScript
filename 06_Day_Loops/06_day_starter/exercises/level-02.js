// Exercises: Level 2
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
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

const countriesDetail = [];
for (let i = 0; i < countries.length; i++) {
  countriesDetail[i] = [[countries[i],countries[i].slice(0,3).toUpperCase(), countries[i].length]];
}
console.log(countriesDetail);

// 2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

//     ['Finland', 'Iceland']
const landCountries = [];
const noLandCountries = []

for (let i = 0; i < countries.length; i++) {
  
  if(countries[i].match(/land/gi)){
    landCountries.push(countries[i]);
  }else{
    noLandCountries.push(countries[i]);
  }
}
console.log(landCountries);
console.log('All these countries are \'without\' land',noLandCountries);

// 3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

//     ['Albania', 'Bolivia','Ethiopia']
const iaCountries = [];
const noIaCountries = [];

for (let i = 0; i < countries.length; i++){
    if(countries[i].match(/ia/gi)){
      iaCountries.push(countries[i]);
    }else{
      noIaCountries.push(countries[i]);
    }
}
console.log(iaCountries);
console.log('All these countries are \'without\' ai',noIaCountries);


// 4. Using the above countries array, find the country containing the biggest number of characters.

//       Ethiopia

let biggestCountry = [];

for (let i = 0; i < countries.length; i++) {
  if(countries[i].length>biggestCountry.length){
    biggestCountry = countries[i];
  }
}

console.log(biggestCountry);

// 5. Using the above countries array, find the country containing only 5 characters.

//     ['Japan', 'Kenya']
const countriesFive = [];

for(const country of countries) {
  if(country.length===5){
    countriesFive.push(country);
  }
}

console.log(countriesFive);

// 6. Find the longest word in the webTechs array
let longestWord = [];

for (let i = 0; i < webTechs.length; i++) {
  if(webTechs[i].length>longestWord.length){
    longestWord = webTechs[i];
  }
}

console.log('The longest word in the webTechs array:',longestWord);

// 7. Use the webTechs array to create the following array of arrays:

//     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const webTechsDetail = [];

for (let i = 0; i < webTechs.length; i++) {
  webTechsDetail[i] = [[webTechs[i],webTechs[i].length]];
}
console.log(webTechsDetail);

// 8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
for (let i = 0; i < mernStack.length; i++) {
  const stack = mernStack[i].substr(0, 1);
  console.log(stack);
}

// 9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i])
}

// 10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon'];

for (let i = fruit.length-1; i >= 0; i--) {
  console.log(fruit[i])
}

// 11. Print all the elements of array as shown below.

      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]

//       HTML
//       CSS
//       JS
//       REACT
//       NODE
//       EXPRESS
//       MONGODB
for (let i = 0; i < fullStack.length; i++) {
  console.log(fullStack[i])
}