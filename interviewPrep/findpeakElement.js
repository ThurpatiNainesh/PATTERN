// Input: nums = [1,2,3,1]
// Output: 2

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
//162 problem on leetcode
//852 problem on leetcode
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0
    for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i
        }
    }
    
    if(nums[0] > nums[1])
        return 0
    if(nums[nums.length - 1] > nums[nums.length - 2])
        return nums.length - 1
    return 0
};
//==============================================================================================================================

const findPeakElement2 = (nums) => {
    if (nums.length == 1 || isDescending(nums)) return 0;
    if (nums.length == 2) return nums[0] > nums[1] ? 0 : 1;
    if (isAscending(nums)) return nums.length - 1;
    if (nums.length == 3 && nums[1] < nums[0] && nums[1] < nums[2]) return 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i - 1] > nums[i - 2] && nums[i - 1] > nums[i]) {
            return i - 1;
        }
    }
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const isDescending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x < arr[i - 1];
    });
};
//==========================================================================================================================================


var findPeakElement1 = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = resolve(nums, left, right);
    return result;
};

function resolve(nums, left, right) {
    if(nums.length < 2) {
        return 0;
    }
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(mid == 0 && nums[mid] > nums[mid+1]) return left;
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid;
        if(nums[mid-1] > nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;    
}
console.log(findPeakElement1([1,2,1,3,5,6,4]))