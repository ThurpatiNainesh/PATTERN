Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let v of nums1) {
        const i = nums2.indexOf(v);
        let find = false;
        for(let j = i + 1; j < nums2.length; j++) {
            if(nums2[j] > v) {
                result.push(nums2[j]);
                find = true;
                break;
            }
        }
        if(!find)
            result.push(-1);     
    }
    return result;
};

var nextGreaterElement = function(nums1, nums2) {
    
    var resultArr = [];
    var maxNum2 = Math.max(...nums2);
    for(var i = 0 ; i< nums1.length; i++){
        if(nums1[i]===maxNum2){
            resultArr.push(-1);
        }
        else{
            var index = nums2.indexOf(nums1[i]);
            while(index<nums2.length){
                if(nums2[index+1]>nums1[i]){
                    resultArr.push(nums2[index+1]);
                    break;
                }
                index++
            }
            if(index === nums2.length){
                resultArr.push(-1);
            }
        }
    } 
    return resultArr
};