//Exercises: Level 3
// 1. Write a program which tells the number of days in a month.
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.

// 1. Write a program which tells the number of days in a month, now consider leap year.

let month = 'January';
// let month = prompt('Enter the month: ');
month = month.charAt(0).toUpperCase()+month.slice(1,month.length).toLowerCase();

switch (month) {
  case 'January':
      console.log(`${month} has 31 day`);
    break;
  case 'February':
      console.log(`${month} has 28/29 day`);
    break;

  case 'March':
      console.log(`${month} has 31 day`);
    break;

  case 'April':
      console.log(`${month} has 30 day`);
    break;

  case 'May':
      console.log(`${month} has 31 day`);
    break;

  case 'June':
      console.log(`${month} has 30 day`);
    break;

  case 'July':
      console.log(`${month} has 31 day`);
    break;

  case 'August':
      console.log(`${month} has 31 day`);
    break;

  case 'September':
      console.log(`${month} has 30 day`);
    break;
  
  case 'October':
      console.log(`${month} has 31 day`);
    break;

  case 'November':
      console.log(`${month} has 30 day`);
    break;
  case 'December':
      console.log(`${month} has 31 day`);
    break;

  default:
      console.log('Wrong Value')
    break;
}