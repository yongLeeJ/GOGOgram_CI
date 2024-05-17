import { useState } from 'react';
import "./Stage.css";
import Puzzle from "./Puzzle";

function Stage() {

    const [Numbers] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    return (
        <>
        {/* <div className='circles'></div> */}
        <div className='stagebox'>
            <div className='StagePick'>
                Pick Stage
            </div>
            <div className='wrapper'>
                <div className='PuzzleBox'>
                    <div className='PuzzleType'>10x10</div>
                    <div className='puzzles' >
                        {
                            Numbers.map(function(a){
                                return(
                                    <Puzzle num={a}></Puzzle>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='PuzzleBox'>
                    <div className='PuzzleType'>20x20</div>
                    <div className='puzzles'>
                        {
                            Numbers.map(function(a){
                                return(
                                    <Puzzle num={a}></Puzzle>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
        </>
        
    )
}
export default Stage;