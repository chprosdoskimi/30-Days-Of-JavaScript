// Exercises: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const { countries } = require('../data/countries');
const { webTechs }  = require('../data/webTechs');

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//     console.log(words)
//     console.log(words.length)

//     ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
//     13
let cleanText = text.replace(/[.,]/gi,'');
let textArr = cleanText.split(' ');
console.log(textArr);
console.log(textArr.length);

// 3. In the following shopping cart add, remove, edit items

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    if(!shoppingCart.includes('Meat')){
      shoppingCart.unshift('Meat');
      console.log(shoppingCart);
    }else{
      console.log('This item already exists');
      console.log(shoppingCart);
    }

//    - add Sugar at the end of you shopping cart if it has not been already added
    if(!shoppingCart.includes('Sugar')){
      shoppingCart.push('Sugar');
      console.log(shoppingCart);
    }else{
      console.log('This item already exists');
      console.log(shoppingCart);
    }

//    - remove 'Honey' if you are allergic to honey
    let allergic = true;
    //let allergic = confirm('Are you allergic a honey');
    if(allergic){
      if(shoppingCart.includes('Honey')){
        let honeyIndex = shoppingCart.indexOf('Honey');
          shoppingCart.splice(honeyIndex,1);
      }
    }
    console.log(shoppingCart);

//    - modify Tea to 'Green Tea'
if(shoppingCart.includes('Tea')){
  let teaIndex = shoppingCart.indexOf('Tea');
    shoppingCart[teaIndex] = 'Green Tea';
    console.log(shoppingCart);
}else{
  console.log('This item does not exists');
}

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

  if(countries.includes('Ethiopia')===true){
    console.log('ETHIOPIA');
  }else{
    countries.push('Ethiopia');
  }

// 5. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
//  console.log(webTechs.includes('Sass'));
  if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
  }else{
    webTechs.push('Sass');
    console.log('adding Sass')
  }

// 6. Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
//     console.log(fullStack)
    
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const fullstack = frontEnd.concat(backEnd);

console.log('Fullstack:',fullstack);