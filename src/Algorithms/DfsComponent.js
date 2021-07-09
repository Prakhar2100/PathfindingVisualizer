function dfs(startNode, endNode){

    var visitedNodes = []
    var path = []
    var stack = [];
    stack.push(startNode);

    while(stack.length > 0){
        var curr = stack[stack.length-1]
        visitedNodes.push(curr)

        if(curr === endNode){
            var temp1 = curr;
            path.push(temp1)
            while(temp1.previous){
                path.push(temp1.previous)
                temp1 = temp1.previous
            }   
            return {path,visitedNodes}
        }
        // eslint-disable-next-line no-loop-func
        stack = stack.filter((ele) => ele !== curr);

        var neighbour = curr.adjacency;
        for(var i=0; i<neighbour.length; i++){
            if(!visitedNodes.includes(neighbour[i]) && !neighbour[i].isWall){
                neighbour[i].previous = curr
                stack.push(neighbour[i])
            }
        }

    }
    return {path,visitedNodes}

}

export default dfs;