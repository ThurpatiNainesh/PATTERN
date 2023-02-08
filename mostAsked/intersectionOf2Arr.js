// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
var intersect = function(nums1, nums2) {
    let obj={}
    let result=[]
    for(let i of nums1){
        if(!obj[i]){
            obj[i]=1
        }else{
            obj[i]++
        }
    }
    for(let i of nums2){
        if(obj[i]>0){
            result.push(i)
            obj[i]--
        }
    }
    return (result)
};
var intersection = function(nums1, nums2) { // m n
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const result = new Set()
    
    for (let num of set1) {
      if (set2.has(num)) {
        result.add(num)
      }
    }
  
  
    return [...result]
};