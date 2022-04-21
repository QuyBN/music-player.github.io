import React, {useState, useRef } from 'react'

function Dashboard() {
    const ref = useRef()

    const handlePlay = ()=> {
       ref.current.play()
    }
  return (
    <div className="dashboard">
        <header>
        <h4>Now playing:</h4>
        <h2>String 57th & 9th</h2>
        </header>
        <div className="cd">
            <div className="cd-thumb"  style={{backgroundImage:'url(https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg)'}}>
            </div>
        </div>
        <div className="control">
        <div className="btn btn-repeat">
            <i className="fas fa-redo"></i>
        </div>
        <div className="btn btn-prev">
            <i className="fas fa-step-backward"></i>
        </div>
        <div 
            className="btn btn-toggle-play"
            onClick={handlePlay}
        
        >
            <i className="fas fa-pause icon-pause"></i>
            <i className="fas fa-play icon-play"></i>
        </div>
        <div className="btn btn-next">
            <i className="fas fa-step-forward"></i>
        </div>
        <div className="btn btn-random">
            <i className="fas fa-random"></i>
        </div>
        </div>
        <input id="progress" className="progress" type="range" value="0" step="1" min="0" max="100"/>
        <audio
        ref={ref}
         id="audio"
         src="./audio/EmKhongHieu-ChanggMinhHuy-7043556.mp3"
         ></audio>
    </div>
  )
}

export default Dashboard