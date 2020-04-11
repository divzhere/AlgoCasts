// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //my solution
    // let arr = str.split("");
    // function reducer(currentValue){
    //     return currentValue
    // }
    // arr.reverse().reduce(reducer);
    // return arr.toString().replace(/,/g, "")

    //solution #1
    //return str.split('').reverse().join('');
    
    //solution #2
    // let reversed = '';
    // for (let character of str) {
    //   reversed = character + reversed;
    // }
    // return reversed

    //solution #3 [kinda similar to my solution]
     return str.split('').reduce((rev, char)=> char + rev,'');
    //Reducer takes two values/arguments, an arrow function and an initial value
}

module.exports = reverse;
