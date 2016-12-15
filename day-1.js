// i: list of L/R directions
// o: from the starting location, what is the shortest number of blocks to the Easter Bunny's location?

// i: "R2, L3"
// o: "5 blocks away"

// i: "R2, R2, R2"
//o: "2 blocks away"

//i: "R5, L5, R5, R3"
//o: "12 blocks away"

var test1 = "R2, L3"
var test2 = "R2, R2, R2"
var test3 = "L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5"

function findHQ(str) {
  var arr = str.split(',');
  var evens = [];
  var odds = [];
  //Based on its position in the array, sort each item into a new odds or evens array
  for (var i = 0; i < arr.length; i++) {
    if ((arr.indexOf(arr[i])) % 2 == 0) {
      evens.push(arr[i])
    } else {
      odds.push(arr[i])
    }
  }
  //Hi, Jeff! I need a hint here:
  // I'm trying to create an object from each array.
  // I will take each item from the even array, and make a new key:value pair. The key is L or R, and the value is the number of blocks traveled.
  // I'm using this data structure, because I think it will help me with the next step
  //In each object, Rs cancel out Rs, and Ls cancel out Ls, and then I will combine the remaining numbers
  //After I have a total from each object, I will add them together, and return the final answer. 
  var evensObj = {};
  var oddsObj = {};
  for (var i = 0; i < evens.length; i++) {
    evensObj[evens[i][1]] = evens[i][2]
  }
  return evensObj
}

console.log(findHQ(test2));
