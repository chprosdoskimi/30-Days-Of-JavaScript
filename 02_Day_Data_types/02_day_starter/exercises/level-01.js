// Exercises: Level 1
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = '30 Days Of JavaScript';

//2. Print the string on the browser console using console.log()
console.log(challenge);

//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4. Print the length of the string on the browser console using console.log()
console.log(challenge.toUpperCase());

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3,7));

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,challenge.length));

//8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//9. Split the string into an array using split() method
let arrayChallenge = challenge.split('')
console.log(arrayChallenge);
//10. Split the string 30 Days Of JavaScript at the space using split() method
let arrayChallenge2 = challenge.split(' ');
console.log(arrayChallenge2);
//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let arrayCompanies = companies.split(', ');
console.log(arrayCompanies);

//12 .Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim());

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('30 Days Of JavaScript'.startsWith('30'));

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('30 Days Of JavaScript'.endsWith('cript'));

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log('30 Days Of JavaScript'.match(/a/g));

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string1 = '30 days of';
let string2 = string1.concat(' ','JavaScript');

console.log(string2);

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('30 Days Of JavaScript '.repeat(2));