function findMaxNumber(myNumbers) {
    if (myNumbers.length === 0) {
      return null;
    }
    return Math.max(...myNumbers);
  }
  
  

  console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log(findMaxNumber([0,33,4,133]));
  console.log(findMaxNumber([]));
  