var countNodes = function(root) {
    function dfs(roots){
        if(roots===null) return []
        let result=[]
        let stack=[roots]
        while(stack.length>0){
           let current = stack.pop()
              result.push(current)
              if(current.left)stack.push(current.left);
              if(current.right)stack.push(current.right);

        }
        return result
    }
    return dfs(root).length
};