var odds = ['R2', 'R2']
var evens = [ 'L1',
  ' R1',
  ' L4',
  ' R5',
  ' R1',
  ' L2',
  ' L2',
  ' L3',
  ' L2',
  ' R1',
  ' L2',
  ' R5',
  ' L4',
  ' L3',
  ' L2',
  ' R1',
  ' L3',
  ' R2',
  ' L2',
  ' L4',
  ' R5',
  ' L3',
  ' R1',
  ' R1',
  ' L3',
  ' L2',
  ' R1',
  ' R2',
  ' L4',
  ' R2',
  ' L189',
  ' L4',
  ' R5',
  ' R1',
  ' L3',
  ' L3',
  ' L2',
  ' R70',
  ' R5',
  ' L4',
  ' L4',
  ' R5',
  ' L3',
  ' R2',
  ' L3',
  ' R5',
  ' R5',
  ' L4',
  ' R1',
  ' R2',
  ' L2',
  ' L2',
  ' L3',
  ' R5',
  ' R1',
  ' L4',
  ' L3',
  ' L3',
  ' L4',
  ' R5',
  ' L2',
  ' L2',
  ' L4',
  ' L2',
  ' R1',
  ' R1',
  ' L2',
  ' R2',
  ' L3',
  ' L4',
  ' L2',
  ' L2',
  ' L4',
  ' L2',
  ' R5',
  ' L3',
  ' L3',
  ' L3',
  ' R5',
  ' R1',
  ' R2',
  ' L3',
  ' L2',
  ' R1',
  ' R1',
  ' L3',
  ' R2',
  ' L2',
  ' R5',
  ' L4',
  ' L3',
  ' R1',
  ' R2',
  ' R5',
  ' R2',
  ' L2' ]

var evensObj = {}
evensObj['R'] = 0
evensObj['L'] = 0

console.log(evens.filter(sortDirections));


function sortDirections(item) {
  if (item[0] === 'R') {
    evensObj['R'] += parseInt(item.slice(1))
  } else if (item[0] === 'L') {
    evensObj['L'] += parseInt(item.slice(1))
  }
  return evensObj
}
console.log(evensObj);

// evens.map(function(item) {
//   if (item[0] === 'R') {
//     evensObj['R'] += parseInt(item.slice(1))
//   } else if (item[0] === 'L') {
//     evensObj['L'] += parseInt(item.slice(1))
//   }
// })
