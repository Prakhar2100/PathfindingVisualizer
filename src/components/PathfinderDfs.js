import React, {useState, useEffect} from 'react';
import Cell from './Cell';
import './styling/PathFindingComponent.css'
import './styling/Cell.css'
import dfs from '../Algorithms/DfsComponent';
import { Button} from 'reactstrap';

const cols = 20;
const rows = 9;

//Creating a grid-view which can be randomised later
//Here 99 represents the walls in the grid
const wallgrid = [
    [1,1,99,1,1,1,1,1,99,1,1,1,1,1,1,1,99,1,99,1],
    [1,1,99,99,1,1,1,1,1,1,1,1,1,99,1,99,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,99,1,1,1],
    [1,1,1,1,1,99,1,99,99,99,99,99,99,1,1,99,1,1,1,1],
    [1,1,1,99,99,1,1,1,1,1,1,1,1,99,99,1,1,1,1,1],
    [1,1,1,99,1,1,1,99,1,1,1,1,1,99,99,1,1,99,1,1],
    [1,1,99,1,1,1,1,1,1,1,1,1,99,99,1,1,1,1,1,1],
    [1,1,1,1,1,1,99,1,1,1,1,1,1,1,1,1,99,1,1,1],
    [1,1,99,1,1,1,1,1,1,1,1,1,99,1,99,1,1,1,1,1]
];

//Initializing the source and destination
const sourcerow = 0;
const sourcecol = 0;
const destinationrow = rows-1;
const destinationcol = cols-1;


const Pathfinderdfs = (algotype) => {

    //Defining States used in the project
    
    const [StorePath, setPath] = useState([]);
    const [StoreGrid, setGrid] = useState([]);
    const [visitedNodes, setVisit] = useState([]);


    useEffect(() => {
        createGrid();
    });


    //initialized a 2d array named grid
    const createGrid = () => {

        //Initializing 2d array grid
        const grid = new Array(rows);
        for(var i=0; i<rows; i++){
            grid[i] = new Array(cols);
        }

        //Turning each grid cell into defined structure of blocks
        // eslint-disable-next-line no-redeclare
        for(var i=0; i<rows; i++){
            for(var j=0; j<cols; j++){
                grid[i][j] = new Block(i, j);
            }
        }

        //Updating the state of the grid
        setGrid(grid);

        //Each block of the grid stores the index of it's adjacent cells
        // eslint-disable-next-line no-redeclare
        for(var i=0; i<rows; i++){
            // eslint-disable-next-line no-redeclare
            for(var j=0;j<cols;j++){
                grid[i][j].adjacentcells(grid);
            }
        }


        const start = grid[sourcerow][sourcecol]
        const end = grid[destinationrow][destinationcol]

        //Choose the algorithm to obtain the minimum path
        var path = dfs(start, end, rows, cols, grid)

        //Update path state
        setPath(path.path);
        setVisit(path.visitedNodes);
    }

    //Block style component
    const gridView = (
        <div>
            {StoreGrid.map((row, rowIndex) => {
                return(
                    <div key={rowIndex} className="rowFlexer">
                        {row.map((col, colIndex) => {
                            const {isStart, isEnd, isWall} = col;
                            return(
                                <Cell key={colIndex} isStart={isStart} isEnd={isEnd} row={rowIndex} col={colIndex} iswall={isWall}/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

    //Information contained inside a single block of the grid
    function Block(i, j){
        this.x = i;this.y = j;
        this.g = 0 ; this.h = 0; this.f = 0; 
        this.isStart = false
        if(this.x === sourcerow){
            if(this.y === sourcecol){
                this.isStart = true
            }
        }

        this.isEnd = false
        if(this.x === destinationrow){
            if(this.y === destinationcol){
                this.isEnd = true
            }
        }
        
        //Creating a wall in the grid where it's val is 99 as stored above
        this.isWall = false;
        if(wallgrid[i][j] === 99){
            this.isWall = true;
        }

        this.prev = undefined; //stores the parent of the visited node to compute path

        //Stores adjacent cells
        this.adjacency = [];
        this.adjacentcells = function(grid){
            if(this.x > 0) this.adjacency.push(grid[this.x-1][this.y]);
            if(this.x < rows-1) this.adjacency.push(grid[this.x+1][this.y]);
            if(this.y > 0) this.adjacency.push(grid[this.x][this.y-1]);
            if(this.y < cols-1) this.adjacency.push(grid[this.x][this.y+1]);
        }
    }

    //Visualizer Animation's
    const PathVisualizer = () => {
        for(var i=0; i<=visitedNodes.length; i++){
            if(i === visitedNodes.length){
                // eslint-disable-next-line no-loop-func
                setTimeout(() => {
                    for(var i=0; i<StorePath.length; i++){
                        // eslint-disable-next-line no-loop-func
                        const node = StorePath[i];
                        setTimeout(() => {
                            document.getElementById(`cell-${node.x}-${node.y}`).className = 
                            "cell shortest-path"
                        }, 10 * i)
                    }
                }, 20 * i)
            }
            else{
                // eslint-disable-next-line no-loop-func
                const node = visitedNodes[i];
                setTimeout(() => {
                    document.getElementById(`cell-${node.x}-${node.y}`).className="cell visited-cell";
                }, 20 * i);
            }
        }
    }

    

    return(
        <div className="cenfull">
            <h2>Depth First Search Visualizer</h2>
            {gridView}
            <br/>
            <Button onClick={PathVisualizer} style = {{backgroundColor: '#512DA8'}}>Visualize</Button>
        </div>

    )
}

export default Pathfinderdfs;