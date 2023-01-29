// memoization
function fib(n,memo=[undefined,1,1]){
    if(memo[n]!==undefined) return memo[n];
    var res= fib(n-1,memo)+fib(n-2,memo)
    memo[n]=res;
    return res
}
let x=fib(5)
console.log(x)

// tabulation
function fib1(n){
    if(n<=2) return 1;
    var fibNum=[0,1,1];
    for(var i=3;i<=n;i++){
        fibNum[i]=fibNum[i-1]+fibNum[i-2];
    }
    return fibNum[n]
}
let y=fib(5)
console.log(y)
