// Anagram 

function areAnagram(str1,str2){
    let count1 = new Array(26);
    let count2 = new Array(26);
    for(let i=0;i<count1.length;i++){
        count1[i]=0
        count2[i]=0
    }
    for(i=0;i<str1.length&&str2.length;i++){
        count1[str1[i].charCodeAt(0)]++
        count2[str1[i].charCodeAt(0)]++
    }
    if(str1.length!==str2.length){
        return false;
    }
    for(i=0;i<count1.length;i++){
        if(count1[i]!==count2[i]){
            return false
        }
    }
    return true 
}
console.log(areAnagram("rat","rat"))
