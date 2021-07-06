// Exercises: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// 1. Declare an _empty_ array;
const arr = Array();

// 2. Declare an array with more than 5 number of elements
const arr5 = Array(5);

// 3. Find the length of your array
console.log(arr);
console.log(arr5.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(countries[0], countries[(countries.length-1)/2],countries[countries.length-1]);
console.log(webTechs[0], webTechs[(webTechs.length-1)/2],webTechs[webTechs.length-1]);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
const mixedDataTypes = [1,'Carlos', true, {age:25}];
console.log(mixedDataTypes);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using _console.log()_
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length-1]);

// 10. Print out each company
for(let i =0;i<itCompanies.length; i++){
  console.log(`${i+1}: ${itCompanies[i]}`);
}

// 11. Change each company name  to uppercase one by one and print them out
for(let i =0;i<itCompanies.length; i++){
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(`${i+1}: ${itCompanies[i]}`);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = itCompanies.slice(0,6).join(', ').concat(' and ',itCompanies[6],' are big IT companies')
console.log(sentence);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
let certainCompany = 'Google';
// let certainCompany = prompt('Enter the company name: ');
if(itCompanies.includes(certainCompany)){
  console.log('The company exists in array');
}else{
  console.log('The company is not found');
}

// 14. Filter out companies which have more than one 'o' without the filter method
for(let i= 0; i<itCompanies.length; i++){
  if(itCompanies[i].includes('oo')){
    console.log('The company that have more than one \'o\': ', itCompanies[i]);
  }
}
// 15. Sort the array using _sort()_ method
console.log(itCompanies.sort());

// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log('The first 3 companies: ',itCompanies.slice(3,itCompanies.length-1));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,3));

// 19. Slice out the middle IT company or companies from the array

// 20. Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
console.log(itCompanies);
console.log('the middle company is: ',itCompanies.splice((itCompanies.length-1)/2,1));

// 22. Remove the last IT company from the array
console.log(itCompanies.pop());
console.log(itCompanies);

// 23. Remove all IT companies
for(let i = 0; i<itCompanies.length; i++){
  delete itCompanies[i];
}
console.log('Remove all items: ',itCompanies);