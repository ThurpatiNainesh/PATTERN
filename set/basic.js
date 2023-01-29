

var chumma = new Set()
chumma.add(1)
chumma.add(1)
chumma.add(2)
// Set(2) { 1, 2 }
console.log(chumma)
chumma.delete(1)
// Set(1) {  2 }
console.log(chumma.has(2))
//  true

// intersectio 
var setA= new Set([1,2])
var setB= new Set([1,2,3,4])
 function intersectiosets(setA,setB){
    var intersection = new Set()
    for(var elem of setB){
        if(setA.has(elem)){
            intersection.add(elem)
        }
    }
    return intersection
 }
 console.log(intersectiosets(setA,setB))

//  isSuperSet

// setA must consiste  element of  setB

 function isSupeset(setB,setA){
    for(var elem of setA){
        if(!setB.has(elem)){
            return false
        }
    }
    return true 
 }
 console.log(isSupeset(setB,setA))


//  UNION
function unionSet(setA,setB){
    var union = new Set(setA)
    for(var elem of setB){
        union.add(elem)
    }
    return union
}
var setA = new Set([1,2,3,4])
    setB = new Set([2,3])
    setC= new Set([5])
    console.log(unionSet(setA,setB))
    console.log(unionSet(setA,setC))

    // DIFFERENCE
function differenceSet(setA,setB){
    var difference = new Set(setA)
    for(var elem of setB){
        difference.delete(elem)
    }
    return difference
}
var setA = new Set([1,2,3,4])
    setB = new Set([2,3])
 console.log(differenceSet(setA,setB))

//   using set to chek for duplicate in an array
function checkDuplicates(arr){
    var mySet = new Set(arr)
    return mySet.size < arr.length-1
}
checkDuplicates([1,2,3,4,5])
checkDuplicates([1,1,2,3,4,5])

//  returning all unique values for separationn 
// function uniqueList(arr1,arr2){
// var mySet = new Set(arr1.concate(arr2))
// return Array.form(mySet)
// }
// uniqueList([1,1,2,2],[2,3,4,5]);
// uniqueList([1,2],[3,4,5])
// uniqueList([],[2,2,3,4,5])