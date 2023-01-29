const graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}
const depthFirstPrint=(graph,source)=>{
      const stack=[source];
      let result=[]
      while(stack.length>0){
        const current= stack.pop()
        result.push(current)
        for(let neighbour of graph[current]){
            stack.push(neighbour)
        }
      }
     return result
}
console.log(depthFirstPrint(graph,'a'))

const breathFirstPrint=(graph,source)=>{
    const queue=[source];
    let result=[]
    while(queue.length>0){
      const current= queue.shift()
      result.push(current)
      for(let neighbour of graph[current]){
          queue.push(neighbour)
      }
    }
   return result
}
console.log(breathFirstPrint(graph,'a'))

