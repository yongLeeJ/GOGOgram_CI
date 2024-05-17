// 게임 화면

import { useState } from 'react';
import "./Game.css";
import Board from './Board';
import Howto from './Howto';
import Rank from './Rank';

function Game() {
    return (
    <div className='GameBoard'>
        <div className='ToolBar'></div>
        <div className='boardBox'>
            <div className='nothing'></div>
            <div className='middlebox'>
                <Board/>
                <div className='summit'>SUBMIT</div>
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