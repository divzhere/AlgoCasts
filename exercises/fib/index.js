// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn){
    const cache = {}
    return function(...args){
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args)
        cache[args] = result;
    }
}

function fib(n) {
   //my solution iterative
    const result = [0,1];
    for(let i=0;i<=n;i++){
      if(i>=2){
          result.push(result[i-1]+result[i-2])
      }
    }
   return result[n]

    //solution 2 recursive [it has a exponential runtime] 
    // if(n<2){
    //     return n
    // }

    // return fib(n-1) + fib(n-2)
    
    //improving solution 2 by using memoization
 

}

module.exports = fib;
