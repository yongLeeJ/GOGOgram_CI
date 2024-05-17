import { useEffect, useState } from 'react';
import "./Puzzle.css";

function Puzzle({num}) {
    return (
        <div className='puzzle' onClick={()=>{console.log(num)}}>
            {num}
        </div>

    )
}
export default Puzzle;