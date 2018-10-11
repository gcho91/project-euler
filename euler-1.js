function multiplesOf3and5(number) {
    var newArray = [];
    // if divisible by 3
    for (var i=1; i<number; i++) {
      // newArray.push(i)
      if (i % 3 == 0 || i % 5 == 0 ) {
        newArray.push(i)
      }
    }
    // return newArray;
    var sum = 0;
    for (var j = 0; j < newArray.length; j++) {
      sum += newArray[j];
    }
  
    return sum;
  }
  
  multiplesOf3and5(1000);

//   https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
//   https://repl.it/@gcho91/Project-Euler-1-FreeCodeCamp