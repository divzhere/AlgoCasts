// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //my solution
    let arr = str.split("");
    function reducer(currentValue){
        return currentValue
    }
    arr.reverse().reduce(reducer);
    return arr.toString().replace(/,/g, "")
}

module.exports = reverse;
