
//  possible number of subset
var subsets = function(nums) {
    const result = []
    
    const walk = (temp, start) => {
      result.push(temp)
      
      // pick on from the rest, then go on
      for(let i = start; i < nums.length;i++) {
        walk(temp.concat(nums[i]), i + 1)
      }
    }

    walk([], 0)
    return result
};
console.log(subsets([1,2,3]))

//  possible number subset part2
function subset1(nums){
    const result=[]
    const walk = (temp,rest)=>{
        result.push(temp)
        for(let i=0;i<rest.length;i++){
            walk(temp.concat(rest[i]),rest.slice(i+1))
        }
    }
    walk([],nums)
    return result
}
console.log(subset1([1,2,3]))

// flatting array into single one
let arr1=[1,2,3,[3,4,5],6,6,6]
function flattenArr(arr){
    let flate=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])===false) flate.push(arr[i])
        else flate = flate.concat(flattenArr(arr[i]))
    }
    return flate
}
console.log(flattenArr(arr1))


// subset without dubplicates
var subsetsWithDup = function(nums) {
    // [a, b, c]
    // pick a number => pick a number from the rest => until there is no number left
    // generate the permupation
    
    // O(nlgn)
    nums.sort()
    
    const result = []
    
    // call stack O(n)
    const pick = (current, start) => {
        result.push(current)
        // [1]
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue
            } else {
                pick(current.concat(nums[i]), i + 1)
            }
        }
    }
    
    // Time: O(2^N)
    pick([], 0)
    
    return result
};
console.log(subsetsWithDup([1,2,2]))


