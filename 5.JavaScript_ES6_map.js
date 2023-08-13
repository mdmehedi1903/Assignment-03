function doubleNumbers(myNumbers) {
   return myNumbers.map(function(number){
       return number * 2
    });
  }
  
  console.log(doubleNumbers([1, 2, 3, 4, 5]));
  