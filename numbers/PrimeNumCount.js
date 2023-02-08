// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
// (nlog logn)
// var countPrimes = function(n) {
//     let isPrime = new Array(n).fill(true);
// //    isPrime[1] = false;
//    for (let i = 2; i * i < n; i++) {
//     //    if (!isPrime[i]) continue;
//        for (let j = i * i; j < n; j += i){
//         isPrime[j] = false
//        } 
//    }
//    let count = 0;
//    for (let i = 2; i < n; i++) {
//        if (isPrime[i]) count++;
//    }
//    return count;
// };
// console.log(countPrimes(10))
function countPrimes1(n){
    let nums=new Array(n).fill(true);
    let primeCount=0;
    for(let i=2;i*i<n;i++){
        // console.log(i)
        if(nums[i]===true){
            for(let j=2;j*i<n;j++){
                // console.log(j*i)
                nums[j*i]=false
            }
        }
    }
    for(let i=2;i<n;i++){
        if(nums[i]===true){
            primeCount++
        }
    }
   return primeCount;
}
console.log(countPrimes1(10))