function Dijkshitra(source, destination){
    var stack = []
    var vis = []
    var path = [] 
    var visitedNodes = [];

    stack.push(source);

    while(stack.length > 0){
        var ind = 0;
        for(var i=0; i < stack.length; i++){
            if(stack[i].f < stack[ind].f){
                ind = i;
            }
        }

        var curr = stack[ind];
        visitedNodes.push(curr);
        if(curr === destination){
            var temp1 = curr;
            path.push(temp1)
            while(temp1.previous){
                path.push(temp1.previous)
                temp1 = temp1.previous
            }   
            return {path,visitedNodes}
            // console.log(path);
        }

        // eslint-disable-next-line no-loop-func
        stack = stack.filter((ele) => ele !== curr);
        vis.push(curr)

        var adjacency = curr.adjacency;
        // eslint-disable-next-line no-redeclare
        for(var i=0; i<adjacency.length; i++){
            var neighbour = adjacency[i];
            if(!vis.includes(neighbour) && !neighbour.isWall){
                var temp = curr.g + 1;
                var newpath = false;
                if(stack.includes(neighbour)){
                    if(temp < neighbour.g){
                        neighbour.g = temp;
                        newpath = true;
                        stack.push(neighbour);
                    }
                }
                else{
                    neighbour.g = temp;
                    newpath = true;
                    stack.push(neighbour);
                }

                if(newpath){
                    neighbour.f = neighbour.g;
                    neighbour.previous = curr;
                }
            }
        }

    }

    return {path, visitedNodes};
}

export default Dijkshitra;