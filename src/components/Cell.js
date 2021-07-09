import React from 'react';
import './styling/Cell.css'

const Cell = ({isStart, isEnd, row, col, iswall}) =>{

    var celltype = ""

    if(isStart) celltype = "cell-start"
    else if(iswall) celltype = "iswall"
    else if(isEnd) celltype = "cell-end";

    return (
        <div className={`cell ${celltype}`} id={`cell-${row}-${col}`}></div>
    )
}

export default Cell;