// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const rev =  n.toString().split('').reverse().join('');
//my solution
//     if(n>0) {
//     return parseInt(rev)
// }
//   else if(n === 0){
//     return 0
//   }
//   else {
//     return parseInt(rev) * -1;
// }
//solution #2
return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;
