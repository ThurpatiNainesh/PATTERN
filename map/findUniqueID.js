let arr1=[
	{
		userId : "054",
		comment : "Amazing!"
	},
	{
		userId : "034",
		comment : "Great Going!"
	},
	{
		userId : "054",
		comment : "Changed my mind. Not good!"
	},
	
]
function uniqueID(arr){
    let map2= new Map()
for(let nums of arr){
    map2.set(nums.userId,(map2.get(nums.userId)+1)||1)
}
console.log(map2)
  let result=[]
for (const [key,val] of map2.entries()) {
    if(val===1){
        result.push(key)
    }
  }
  return result
}
console.log(uniqueID(arr1))

