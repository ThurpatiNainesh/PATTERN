// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

var reverse = function(x) {
    if(x<0) return -1 * reverse(-x);
    const solution = (x+"").split('').reverse('').join('');
    return (solution>2**31-1)?0:solution
};