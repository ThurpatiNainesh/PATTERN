// edge =============> adjacency list 
//  checking has path or not
const edge=[
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];
// graph:{
//     i:[j,k],
//     j:[i],
//     k:[i,m,l],
//     m:[k],
//     l:[k],
//     o:[n],
//     n:[o]
// }
const unidirectedPath =(edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
//     console.log(graph)
return hashPath(graph,nodeA,nodeB,new Set())
}
const hashPath=(graph,src,dst,visited)=>{
 if(src===dst) return true;
 if(visited.has(src)) return false;
 visited.add(src);
 for(let neighbor of graph[src]){
    if(hashPath(graph,neighbor,dst,visited)===true){
        return true;
    }
   }
   return false
}



const buildGraph=(edges)=>{
    const graph={};
    for(let edge of edges){
        const [a,b]= edge;
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}