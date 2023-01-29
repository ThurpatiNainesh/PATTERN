let str = "let";
let permutation = (str, result) => {
    // base case
    if (str.length == 0) {
        console.log(result);
    }
    for (let i = 0; i < str.length; i++) {

        let rest = str.substring(0, i) + str.substring(i + 1)
                 //              l     +                et
        permutation(rest, result + str[i])
    }

}
permutation(str, '')

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function(nums) {
    const result = []
    
    const walk = (temp, rest) => {
      if (rest.length === 0) {
        result.push(temp)
        return
      }
      
      for (let i = 0; i < rest.length; i++) {
        const newRest = rest.slice(0)
        newRest.splice(i, 1)
        walk(temp.concat(rest[i]), newRest)
      }
    }
    
    walk([], nums)
  
    return result
};