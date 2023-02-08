
  let arr1=[11,1,7,11,1,2,2,3,3,3,48,4,4,]
  function withoutPair(arr){
       let map= new Map()
       for(let curr of arr){
        // if(map.get(curr)){
            map.set(curr,(map.get(curr)+1)||1)
        // }else{
        //     map.set(curr,1)
        // }
       }
       console.log(map)
        let result=[]
       for(let val of map){
        if(val[1]%2==1){
          result.push(val[0])
        }
       }
       return result.join(' ')
  }
  console.log(withoutPair(arr1))