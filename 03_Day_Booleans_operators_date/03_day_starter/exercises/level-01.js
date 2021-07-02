// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Carlos",
    lastName = "Prosdoskimi",
    country = 'Brazil',
    city = "Sorocaba",
    age= 25,
    isMarried = false,
    year= new Date().getFullYear();

console.log(typeof firstName, typeof lastName, typeof country, typeof city,
             typeof age, typeof isMarried, typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' ===typeof 10);
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')===10);
// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
      console.log(8>7, '10'==10, parseInt('8')===8);
//    2. Write three JavaScript statement which provide falsy value.
      console.log(8>9, )
// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3 -> true
//    2. 4 >= 3 -> true
//    3. 4 < 3 -> false
//    4. 4 <= 3 -> false
//    5. 4 == 4 -> true
//    6. 4 === 4 -> true
//    7. 4 != 4 -> false
//    8. 4 !== 4 -> false
//    9. 4 != '4' -> false
//    10. 4 == '4' -> true
//    11. 4 === '4' -> false
//    12. Find the length of python and jargon and make a falsy comparison statement.
      console.log(4 > 3, 4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4, 4 != 4,4 !== 4,
        4 != '4',4 == '4',4 === '4', 'python'.length>'jargon'.length);
      

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12 -> true
//    2. 4 > 3 && 10 > 12 -> false
//    3. 4 > 3 || 10 < 12 -> true
//    4. 4 > 3 || 10 > 12 -> true
//    5. !(4 > 3) -> false
//    6. !(4 < 3) -> true
//    7. !(false) -> true
//    8. !(4 > 3 && 10 < 12) -> false
//    9. !(4 > 3 && 10 > 12) -> true
//    10. !(4 === '4') -> true
//    11. There is no 'on' in both dragon and python
      console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12,
          !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4') );
      console.log(!('dragon'.includes('on') && 'python'.includes('on')));

// 7. Use the Date object to do the following activities
      let d = new Date();
//    1. What is the year today?
       console.log(d.getFullYear());

//    2. What is the month today as a number?
        console.log(d.getMonth());

//    3. What is the date today?
        let dd = String(d.getDate()).padStart(2,'0');
        let mm =String(d.getMonth()+1).padStart(2,'0');
        let yyyy = d.getFullYear();

        console.log(mm +'/'+dd+'/'+yyyy);
        // console.log(d.toJSON().slice(0,10).replace(/-/g,'/'));

//    4. What is the day today as a number?
        console.log(d.getDate());

//    5. What is the hours now?
        console.log(d.getHours());

//    6. What is the minutes now?
        console.log(d.getMinutes());

//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
        console.log(Math.round(d.getTime()/1000));

        //https://futurestud.io/tutorials/get-number-of-seconds-since-epoch-in-javascript