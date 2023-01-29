function fibonacci(nums){
    if(nums==0){
        return 0
    }
    if(nums==1||nums==2){
        return 1
    }
    let fn = fibonacci(nums-1)+fibonacci(nums-2)
    return fn
}
console.log( fibonacci(5))

// factorial
function factorial(n){
    if(n==1||n==0){
        return 1;
    }
    let nFACT = n*factorial(n-1)
    return nFACT
}
console.log(factorial(5))



// product of an array

function productOfAnArray(arr,index){
    if(index==0){
        return arr[0]
    }
    return arr[index-1]*productOfAnArray(arr,index-1)
}
console.log(productOfAnArray([1,3,4,5,2],5))


// reversing string 

function reverseString(str){
    if(str.length<=1) return str;
    return reverseString(str.slice(1))+str[0]
}
console.log(reverseString("rmmu"))


// palidrome
function isPlr(str){
    if(str.length<=1) return true
    return str[0]===str.slice(-1)&&isPlr(str.slice(1,-1))
}
console.log(isPlr("ummu"))

// reversing array 
let str1="ummr"
const arr1= str1.split('')
function reverseArray(arr,left,right){
    if(left<right){
        let temp = arr[left]
        arr[left]=arr[right]
        arr[right] = temp
        reverseArray(arr,left+1,right-1)
    }
    return arr.join("")
}
console.log(reverseArray(arr1,0,arr1.length-1))

// palidrome
function isPalidrome(arr,left,right){
    if(left<right){
        if(arr[left]===arr[right]){
          return isPalidrome(arr,left+1,right-1)
        }else{
            return false
        }
    }
    return true
}
console.log(isPalidrome(arr1,0,arr1.lenght-1))

// capitalising first word
function capitalisingFn(arr){
    let result =[]
    if(arr.length==0) return []
    let s= arr[0][0].toUpperCase()+arr[0].slice(1)
    result.push(s)
    return result.concat(capitalisingFn(arr.slice(1)))
}
console.log(capitalisingFn(["abc","ghj","fghj"]))


let arr=[7,8,9,7,6]
// console.log(arr.splice(1))
function product(arr){
    if(arr.length===0) return 1
    // [ 8, 9, 7, 6 ]
    return arr[0]*product(arr.slice(1))
}
console.log(product(arr))

function cpower(x,y){
    if(y==0) return 1
    return x*cpower(x,y-1)
}
console.log(cpower(2,2))

// count down 
function chumma(x){
    if(x<1) return 
    process.stdout.write(String(x)+" ")
    chumma(x-1)
    // process.stdout.write(String(x)+" ")
    
}
console.log(chumma(15))

function countdown(n){
    if(n<0){
        return;
    }else{
        // console.log(n)
        countdown(n-1)
        console.log(n)
    }
}
console.log(countdown(15))

