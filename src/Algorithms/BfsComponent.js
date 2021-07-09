function bfs(startNode, endNode){

    var visitedNodes = []
    var path = []
    var queue = [];
    queue.push(startNode);

    while(queue.length > 0){
        var curr = queue[0]
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
        queue = queue.filter((ele) => ele !== curr);

        var neighbour = curr.adjacency;
        for(var i=0; i<neighbour.length; i++){
            if(!visitedNodes.includes(neighbour[i]) && !neighbour[i].isWall){
                neighbour[i].previous = curr
                queue.push(neighbour[i])
            }
        }

    }
    return {path,visitedNodes}

}

export default bfs;