// i: list of L/R directions
// o: from the starting location, what is the shortest number of blocks to the Easter Bunny's location?

// i: "R2, L3"
// o: "5 blocks away"

// i: "R2, R2, R2"
//o: "2 blocks away"

// i: "R5,"L5, R5, R3"
//o: 12

//Distance = (E-W) + (N-S)
//Distance = evens(first direction - opposite direction) + odds(first direction - opposite direction)
//
var test1 = "R2, L3"
var test2 = "R2, R2, R2"
var test3 = "R5, L5, R5, R3"
var test4 = "L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5"

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
  var evensObj = {}
  evensObj['R'] = 0
  evensObj['L'] = 0
  evens.forEach(function(item) {
    if (item[0] === 'R') {
      evensObj['R'] += parseInt(item.slice(1))
    } else if (item[0] === 'L') {
      evensObj['L'] += parseInt(item.slice(1))
    }
  })
  return evensObj
}


console.log(findHQ(test4));
