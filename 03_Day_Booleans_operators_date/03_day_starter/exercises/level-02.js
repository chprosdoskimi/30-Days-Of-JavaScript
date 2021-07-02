// Exercises: Level 2
//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//      Enter base: 20
//      Enter height: 10
//      The area of the triangle is 100
  let triangleBase = prompt('Enter the base value');
  let triangleHeight = prompt('Enter the height value ');
  let triArea = (triangleBase*triangleHeight)/2;
  console.log(triArea);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//      Enter side a: 5
//      Enter side b: 4
//      Enter side c: 3
//      The perimeter of the triangle is 12
let sideA = prompt('Enter triangle side A value');
let sideB = prompt('Enter triangle side B value');
let sideC = prompt('Enter triangle side C value');
  let triPerimeter = Number(sideA)+Number(sideB)+Number(sideC);
  console.log(triPerimeter);

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let recLength = prompt('Enter the rectangle length value');
let recWidth = prompt('Enter the rectangle width value');

let recArea = recLength*recWidth;
let recPerimeter = 2*(Number(recWidth)+ Number(recLength));
console.log(recArea,recPerimeter);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 let radius = prompt('Enter the redius value');
 let cirArea = Math.PI * radius*radius;
 console.log(cirArea);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = prompt('Enter the x-intercept value');
let y = prompt('Enter the y-intercept value');

let slope = 2*(x) -2 -y;

console.log(slope);

//6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = prompt('Enter the x value');
let y1 = prompt('Enter the y value');
let x2 = prompt('Enter the second x value');
let y2 = prompt('Enter the second y value');

let m = (y2-y1)/(x2-x1);

console.log(m);

//7. Compare the slope of above two questions.
console.log(slope>m);

//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = prompt('Enter the x value');
let yResult = x*x + 6*x +9;
console.log(yResult);

//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//      Enter hours: 40
//      Enter rate per hour: 28
//      Your weekly earning is 1120
let hours = prompt('Enter hours');
let rate = prompt('Enter rate per hour');

let weekEarn = hours * rate;
console.log('Your weekly earning',weekEarn);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
  let yourName = prompt('Enter your name');
  if(yourName.length>7){
    console.log('your name is long');
  }else{
    console.log('your name is short');
  }
//11. Compare your first name length and your family name length and you should get this output.
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'

//     Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = prompt('Enter your first Name');
let lastName = prompt('Enter your last Name');
  if(firstName.length>lastName.length){
    console.log(`Your first name, "${firstName}" is longer than your family name, "${lastName}"`);
  }else{
    console.log(`Your family name, "${lastName}" is longer than your first name, "${firstName}"`);
  }

//12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
//        let myAge = 250
//        let yourAge = 25

//       I am 225 years older than you.

let myAge = 250
let yourAge = 25;

if(myAge>yourAge){
  console.log(`I am ${myAge-yourAge} years older than you`);
}else{
  console.log(`You are ${yourAge-myAge} years older than me`);
}

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//      Enter birth year: 1995
//      You are 25. You are old enough to drive


//      Enter birth year: 2005
//      You are 15. You will be allowed to drive after 3 years.
let birthYear = prompt('Enter your birth year');
let date = new Date();
let age = date.getFullYear()-birthYear;

if(age>=18){
  console.log(`You are ${age}. You are old enough to drive`);
}else{
  console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`);
}

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//      Enter number of yours you live: 100
//      You lived 3153600000 seconds.
let years = prompt('Enter number of years');
let yearInSecond = 31536000* years;

console.log(`You lived ${yearInSecond} seconds.`);

//15. Create a human readable time format using the Date time object
//      1. YYYY-MM-DD HH:mm
//      2. DD-MM-YYYY HH:mm
//      3. DD/MM/YYYY HH:mm

let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes()

console.log(`${date.toJSON().slice(0,10)} ${hours}:${minutes}`); //YYYY-MM-DD HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`); //DD-MM-YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`); //DD/MM/YYYY HH:mm