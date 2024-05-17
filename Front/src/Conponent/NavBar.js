import { useState } from 'react';
import "./NavBar.css";
import Login from "./Login";

function NavBar({stageOnoff, setStage}) {
    return (
        <div>
        <div className='backcircles'></div>
        <div className='Bar'>
            
            <div onClick={()=>{
                setStage(0);
            }}>
            <Login/></div>
            <div onClick={()=>{
                setStage(1)
            }}>
                GOGOGRAM
            </div>
            <div style={{color : "rgba(0,0,0,0)", fontSize:"10px"}}>
                Login
            </div>
        </div>
    </div>
    )
}
export default NavBar;