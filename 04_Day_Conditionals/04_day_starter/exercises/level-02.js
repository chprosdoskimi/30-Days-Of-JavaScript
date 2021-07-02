// Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-79, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let score = 80;
// let score = prompt('Enter your score');

if(score>=80 && score<=100){
  console.log('A');
}else if(score>=70 && score <=79){
  console.log('B');
}else if(score>=60 && score <=69){
  console.log('C');
}else if(score>=50 && score <=59){
  console.log('D');
}else{
  console.log('F')
}

// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer
let season = 'October';
// let season = prompt('Enter the month value: ');

if(season ==='September'||season ==='October'||season==='November'){
  console.log('The season is Autumn');
}else if(season ==='December'||season ==='January'||season==='February'){
  console.log('The season is Winter');
}else if(season ==='March'||season ==='April'||season==='May'){
  console.log('The season is Spring');
}else if(season ==='June'||season ==='July'||season==='August'){
  console.log('The season is Summer');
}else{
  alert('Wrong Value !');
}

// 1. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

let weekDay = 'Saturday';
// let weekDay = prompt('Enter the Weekday: ');
weekDay = weekDay.charAt(0).toUpperCase()+weekDay.slice(1,weekDay.length).toLowerCase();

switch (weekDay) {
  case 'Monday':
      console.log(`${weekDay} is a working day`);
    break;
  case 'Tuesday':
      console.log(`${weekDay} is a working day`);
    break;

  case 'Wednesday':
      console.log(`${weekDay} is a working day`);
    break;

  case 'Thursday':
      console.log(`${weekDay} is a working day`);
    break;

  case 'Friday':
      console.log(`${weekDay} is a working day`);
    break;

  case 'Saturday':
      console.log(`${weekDay} is a weekend`);
    break;

  case 'Sunday':
      console.log(`${weekDay} is a weekend`);
    break;
  default:
      console.log('Wrong Value')
    break;
}