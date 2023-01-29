let nums=[1,2,3,4,5,6,1,2,3,4]
let ht={}

for(const num of nums){
    ht[num] = ht[num]+1 || 1
}
console.log(ht)

let ht2={}
for(const num of nums){
    ht2[num]? ht2[num]=false :ht2[num]=true
}
console.log(ht2)

let str="leetcode"
let stMap ={}
    
    for(let i=0;i<str.length;i++){
        if(stMap[str[i]]==undefined){
            stMap[str[i]] = true;
        }else{
            stMap[str[i]]=false
        }
    }
    console.log(stMap)

 let strNum1="mamamia"
    let countNum1 = {};
    
    for(let i = 0; i < strNum1.length; i++){
        let str=strNum1[i]
      countNum1[str] = (countNum1[str] || 0) + 1
    }
    console.log(countNum1)

// ****************************************************************************************************************************

    let instructor ={
        firstName:"kelly",
        isInstructor:true,
        favoriteNumber:[1,2,3,4]
    }
    // o(n)
     let x= Object.keys(instructor)
     console.log(x)
    //  o(n)
     let y = Object.values(instructor)
     console.log(y)
    //  o(1)
     let z = instructor.hasOwnProperty("firstName")
    //  only key not values
     console.log(z)
    //  o(n)
     let w = Object.entries(instructor)
    //  return array of key and values
     console.log(w)

     for(let val of y){
        console.log(val)
     }
     for(let key of x){
        console.log(key)
     }
     for(let every of w){
        console.log(`${every[0]} lets see`)
     }
    
    
    
