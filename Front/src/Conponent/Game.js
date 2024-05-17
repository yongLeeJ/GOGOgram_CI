// 게임 화면

import { useState } from 'react';
import "./Game.css";
import Board from './Board';
import Howto from './Howto';
import Rank from './Rank';

function Game() {
    return (
    <div className='GameBoard'>
        <div className='ToolBox'>
            <div className='ToolBar'>
                <div className='toolGroup1'>
                    <button>H</button>
                    <button>↺</button>
                </div>
                
                <div className='Clock'>Clock</div>
                
                <div className='toolGroup2'>
                    <button>◀</button>
                    <button>▶</button>
                </div>
            </div>
        </div>
        <div className='boardBox'>
            <div className='nothing'></div>
            <div className='middlebox'>
                <Board/>
                <button className='summit'>SUBMIT</button>
            </div>
            <div className='help'>
                <Howto/>
                <Rank/>
            </div>
        </div>
    </div>
    )
}
export default Game;