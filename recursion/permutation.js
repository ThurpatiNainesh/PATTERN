let str = "let";
let permutation = (str, result) => {
    if (str.length == 0) {
        console.log(result);
    }
    for (let i = 0; i < str.length; i++) {
        let rest = str.substring(0, i) + str.substring(i + 1)
        permutation(rest, result + str[i])
    }

}
permutation(str, '')

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
console.log(permute([1,2,3]))