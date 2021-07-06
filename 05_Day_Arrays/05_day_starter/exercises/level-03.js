// Exercises: Level 3
//1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age
  console.log(ages.sort());

// - Find the median age(one middle item or two middle items divided by two)
  let medianAge = ages.sort().splice(Math.floor((ages.length)/2),2);
  
  for(let i = 0; i<medianAge.length; i++){
    console.log(`Middle item(s): ${parseInt(medianAge)/2}`);
  }

// - Find the average age(all items divided by number of items)
let averageAge = 0;
let j =0;

  for(let i = 0; i < ages.length; i++){
      averageAge += ages[i];
      j= j+1;
  }
console.log('The average age',averageAge/j);

// - Find the range of the ages(max minus min)
let maxAge = Math.max.apply(null,ages);
let minAge = Math.min.apply(null,ages);
console.log('the range is: ', maxAge-minAge);

// - Compare the value of (min - average) and (max - average), use abs() method
if (Math.abs(minAge - averageAge) > Math.abs(maxAge - averageAge)) {
  console.log("minimum is greater than maximum");
} else {
  console.log("maximum is greater than minimun");
}

//1.Slice the first ten countries from the countries array
const {countries} = require('../data/countries');
console.log(countries.slice(0,5));

//2. Find the middle country(ies) in the countries array
let countryArrLength = countries.length-1;
console.log(countries[(countryArrLength)/2]);

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const countries1 = countries.slice(0,countryArrLength/2);
const countries2 = countries.slice(countryArrLength/2,countries.length)

console.log(countries1, countries2);