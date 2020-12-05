
let date = ["june 1","june 2","june 3","june 4","june 5","june 6","june 7","june 8","june 9","june 10","june 11","june 12","june 13","june 14","june 15","june 16","june 17","june 18", "june 19", "june 20","june 21","june 22","june 23","june 24","june 25","june 26","june 27","june 28","june 29","june 30", "july 1","july 2","july 3","july 4","july 5","july 6","july 7","july 8","july 9","july 10","july 11","july 12","july 13","july 14","july 15","july 16","july 17","july 18", "july 19", "july 20","july 21","july 22","july 23","july 24","july 25","july 26","july 27","july 28","july 29","july 30", "july 31", "august 1", "august 2", "august 3","august 4","august 5","august 6","august 7","august 8","august 9","august 10","august 11","august 12","august 13","august 14","august 15","august 16","august 17","august 18", "august 19", "august 20","august 21","august 22","august 23","august 24","august 25","august 26","august 27","august 28","august 29","august 30", "august 31"]

console.log(date.length);

let totTests = [17271,19808,21545,22836,25548,20891,9450,23582,28655,27317,25717,27130,17732,9690,25003,25680,26845,25764,26684,17848,9837,26916,31840,32983,36745,38607,27291,10890,35015,37585,41362,42559,19055,8701,8961,29620,40150,34565,42335,41736,31424,23367,26787,44347,41129,44765,42603,30093,24226,27481,43982,45367,41583,36108,20000,23798,26997,44759,43387,42949,38524,29566,22579,25025,40530,42808,40731,41764,24628,21756,25811,42173,39406,40612,35422,22690,16043,26662,35536,34770,33722,31962,20643,14685,27295,33958,36479,32374,31614,20464,14541,27361]

console.log(totTests.length);

let posTests = [1122,1453,1440,1392,1322,1114,576,1451,1443,1577,1541,1443,1193,725,1801,1910,2240,2216,2161,1697,1045,2301,2940,2901,3237,3134,2304,1092,2904,3246,3647,3526,1702,1075,992,2712,3539,3048,3544,3592,2733,2072,2558,3859,3388,3626,3351,2649,2051,2269,3676,3466,3654,2581,1825,2032,1764,3440,2554,2387,2277,1730,1488,1407,2328,2210,2003,1981,1399,1229,1427,1894,1814,1691,1525,1223,805,1264,1543,1440,1400,1427,941,701,1311,1354,1395,1256,1099,904,573,1067]

console.log(posTests.length);


// 3 IN CLASS OBJECTIVES TO COMPLETE

// IN CLASS OBJECTIVE ONE: 
// FIND THE POSITIVE RATE OF CASES AND STORE THEM IN AN ARRAY
// rate is positive tests divided by total tests

let posRate = []

for (var i = 0; i < totTests.length; i++) {
  
  posRate[i] = (posTests[i] / totTests[i])*100;
  
}
//the *100 gives us the percentage

// IN CLASS OBJECTIVE TWO: 
// OUTPUT THE DAY WITH THE LOWEST NUMBER OF CASES AND PRINT IT TO THE CONSOLE

var lowestCases = 0;

for (var i = 0; i < posTests.length; i++) {
  
  if (posTests[i] < posTests[lowestCases]) {
    
    lowestCases = i;
  }
}

console.log("The day with the lowest cases was " + date[lowestCases] + " which was " + posTests[lowestCases] + " positive cases");


// IN CLASS OBJECTIVE THREE: 
// OUTPUT THE DAY WITH THE LOWEST RATE AND PRINT IT TO THE CONSOLE

var lowestRate = 0;

for (var i = 0; i < posRate.length; i++) {
  
  if (posRate[i] < posRate[lowestRate]) {
    
    lowestRate = i;
  }
}

console.log("The day with the lowest rate was " + date[lowestRate] + " which was " + posRate[lowestRate] + "%");



// 5 HOMEWORK OBJECTIVES TO COMPLETE

// ONE: OUTPUT THE DAY WITH THE HIGHEST NUMBER OF CASES AND PRINT IT TO THE CONSOLE



var highestCases = 0;

for (var i = 0; i < posTests.length; i++) {
  
  if (posTests[i] > posTests[highestCases]) {
    
    highestCases = i;
  }
}

console.log("The day with the highest cases was " + date[highestCases] + " which was " + posTests[highestCases] + " positive cases");



// TWO: OUTPUT THE DAY WITH THE HIGHEST RATE OF CASES AND PRINT IT TO THE CONSOLE

var highestRate = 0;

for (var i = 0; i < posRate.length; i++) {
  
  if (posRate[i] > posRate[highestRate]) {
    
    highestRate = i;
  }
}

console.log("The day with the highest rate was " + date[highestRate] + " which was " + posRate[highestRate] + "%");



// THREE: FIND THE AVERAGE RATE FOR EACH MONTH AND PRINT IT TO THE CONSOLE

function sum(arr) {
  
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    
    sum = sum + arr[i];
    
  }
  
  return sum;
  
}
//june 
let june = posTests.slice(0,30);
var june_sum = sum(june);
var june_avg = june_sum / june.length

//find avg rate in june
let june_tests = totTests.slice(0,30);
var june_totT = sum(june_tests);
var june_AR = (june_sum / june_totT)*100; //the *100 is to make it a percentage

console.log("The average positive test rate in June was " + june_AR + "%.")

console.log("The average number of cases in June was " + june_avg + " cases.")

//july
let july = posTests.slice(30,61);
var july_sum = sum(july);
var july_avg = july_sum / july.length;

//avg case rate for july
let july_tests = totTests.slice(30,61);
var july_totT = sum(july_tests);
var july_AR = (july_sum / july_totT)*100;

console.log("The average positive test rate in July was " + july_AR + "%.")

console.log("The average number of cases in July was " + july_avg + " cases.")

//august
let august = posTests.slice(61,92);
var august_sum = sum(august);
var august_avg = august_sum / august.length;

//avg case rate of august
let august_tests = totTests.slice(61, 92);
var august_totT = sum(august_tests);
var august_AR = (august_sum / august_totT)*100;

console.log("The average postive test rate in August was " + august_AR + "%.") 

console.log("The average number of cases in August was " + august_avg + " cases.")
// FOUR: FIND THE AVERAGE RATE FOR EACH WEEK AND PRINT IT TO THE CONSOLE

function week_avg(x,y){
  let week1_avg = (sum(posTests.slice(x,y)) / sum(totTests.slice(x,y)))*100;
  
  var date1 = date[x].charAt(0).toUpperCase() + date[x].slice(1);
  var date2 = date[y].charAt(0).toUpperCase() + date[y].slice(1)
  console.log("The average positive test rate from " + date1 + " to " + date2 + " was " + week1_avg + "%.");
}

week_avg(23,30);
week_avg(30,37);
week_avg(37,44);
week_avg(44,51);


//FIVE: WHAT DOES THIS DATA TELL YOU? WHICH MONTH WAS THE HIGHEST AND WHY COULD THAT BE? WHICH WEEKS WERE THE HIGHEST AND WHY MIGHT THAT BE? TELL ME IN A COMMENT! 
/* 
The week of July 4 has the highest positive test rate. This leads me to believe that many people had large gatherings, along with people flooding the beaches. This is corroborated by finding that July 4 was the day with the highest number of COVID-19 cases.
*/

// THREE EXTRA CREDIT OBJECTIVE (EACH IS WORTH 1 POINT, UP TO 3 POINTS OF EC AVAILABLE)

// COMPLETE THIS ANALYSIS FOR LA COUNTY CASES FROM MARCH UNTIL NOW

// COMPLETE THIS ANALYSIS FOR ANOTHER CITY OR STATE

// PLOT SOME OF YOUR RELEVANT (you may use others plot functions or libraries)
