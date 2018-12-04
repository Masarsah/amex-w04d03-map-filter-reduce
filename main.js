

//Write code using .map() to have the following input and output:

//getSquares – takes in an array of numbers and returns an array of their squares

//ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]
//isDivisibleBy3 – takes in an array of numbers and returns an array of booleans indicating whether each element is divisible by 3

//ex: isDivisibleBy3([1, 3, 4, 6, 7, 8, 9]) => [false, true, false, true, false, false true]

// var numbers = [1, 2, 3, 4, 5];
//   numbers.map(Math.square,function(value){
//    return value
//    })


   var numbers = [1, 2, 3, 4, 5].map(function(square){
	return Math.pow(square,2);
});

console.log(numbers);

//...................Filter...................//


//Write code using .filter() to have the following input and output:

//getOdds – takes in an array of numbers and returns an array of only odd numbers
var getOdds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function(odd){

        return odd % 2 !== 0 ;
    });
console.log(getOdds)

//getEvens – takes in an array of numbers and returns an array of only even numbers

var getEvens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function(even){

    return even % 2 == 0 ;
});
console.log(getEvens)

//getDivisibleBy4 – takes in an array of numbers and returns an array of only numbers that are divisible by 4

var getDivisibleBy4 = [1, 4, 6, 8, 12, 13].filter(function(Dividedby4){

    return Dividedby4 % 4 == 0 ;
});
console.log(getDivisibleBy4)


//......................Reduce..................//

//addUpAll – add up all numbers in a given array

 var addUpAll= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  console.log(addUpAll)

//multiplyAllNums – multiply all numbers in a given array

var multiplyAllNums= [1, 2, 3, 4, 5].reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  });
  console.log(multiplyAllNums)

//squareAllNums – power up all numbers in a given array

var squareAllNums= [3, 2, 3].reduce(function(accumulator, currentValue) {
    return Math.pow(accumulator, currentValue);
  });
  console.log(squareAllNums)

  // addUpAllAges – add up all the ages in an array of objects

  var addUpAllAges= [3, 2, 3].reduce(function(accumulator, currentValue) {
    return Math.pow(accumulator, currentValue);
  });
  console.log(addUpAllAges)