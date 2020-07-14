/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 20;
if (votingAge > 18) {
    console.log(true);
} else {
    console.log(false);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var myVar = 40;
if (mySecondVar > 40) {
    myVar = 60;
} 




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number('1999');




//Task d: Write a function to multiply a*b 
function multiply(a,b) {
    return a*b;
}

console.log(multiply(9,10));

// Arrow Function -
let aTimesb = (a,b) => a*b;



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function myAgeinDogYears(myAge) {
    return myAge * 7;
}




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  function myDogFeed(weight, age) {
    if (age >= 1) {
        if (15 >= weight && weight >= 11) {
            return weight * .03;
        } else if (10 >= weight && weight >= 6) {
            return weight * .04;
        } else if (5 >= weight) {
            return weight * .05;
        } else {
            return weight *.02;
        }
    } else { 
        if (.5 > age && age >= .25 ) {
            return weight * .05; 
        } else {
            return weight * .04;
        }
    }
}




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var rock = 'rock';
var paper = 'paper';
var scissors = 'scissors';


function rockPaperScissor(yourMove) {
    var computerMove = Math.ceil(Math.random()*3);
    if(computerMove === 1) {
      computerMove = rock;
    } else if(computerMove === 2) {
      computerMove = paper;
    } else {
      computerMove = scissors;
    }
  
    if(yourMove === computerMove){
        return "Same move, go again";
    } else if((yourMove === rock) && (computerMove === scissors) || ((yourMove === paper) && (computerMove === rock)) || ((yourMove === scissors) && (computerMove === paper))) {
        return "winner winner chicken dinner";
    } else {
        return "you lose!";
    }
}
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kiloToMiles(km) {
    return km * 0.62137;
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCM(feet) {
    return feet * 30.48;
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function sodaOnTheWall(startingNum) {
      for (let i = startingNum; i > 0; i--) {
          console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
      }
  }




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

  function gradeCalc(grade) {
      if(grade >= 90) {
          return "A";
      } else if(grade >= 80) {
          return "B";
      } else if(grade >= 70) {
          return "C";
      } else if(grade >= 60) {
          return "D";
      } else {
          return "F";
      }
  }

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method  

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
    let totalVowels = 0;
    let newStr = str.toString().toLowerCase();
    for (let i = 0; i < newStr.length; i++) {
        if(vowels.includes(newStr[i])) {
            totalVowels+=1;
        } 
    }
    return totalVowels;
  }


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rockPaperScissor(yourMove) {
    var rock = 'rock';
    var paper = 'paper';
    var scissors = 'scissors';

    var computerMove = Math.ceil(Math.random()*3);
    if(computerMove === 1) {
    computerMove = rock;
    } else if(computerMove === 2) {
    computerMove = paper;
    } else {
    computerMove = scissors;
    }

    if(yourMove === computerMove){
        console.log("Same move, go again");
    } else if((yourMove === rock) && (computerMove === scissors) || ((yourMove === paper) && (computerMove === rock)) || ((yourMove === scissors) && (computerMove === paper))) {
        console.log("winner winner chicken dinner");
    } else {
        console.log("you lose!");
    }
}

yourMove = window.prompt('rock, paper or scissors?').toString().toLowerCase();
rockPaperScissor(yourMove);