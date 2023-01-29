//  src to dst 
//  cyclic we cant find false
//  has path return true 
const graph ={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
}
// hasPath(graph,'f','k') 

// const hasPath=(graph,src,dst)=>{
//     if(src===dst) return true;
//     for(let neighbor of graph[src]){
//         if(hasPath(graph,neighbor,dst)===true){
//             return true
//         }
//     }
// }
// console.log(hasPath(graph,'f','k'))


const hashPath = (graph,src,dst)=>{
    const queue=[src];
    while(queue.length>0){
        const current = queue.shift();
        if(current===dst) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false
}



