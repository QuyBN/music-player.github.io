import React, {useState, useRef } from 'react'
import clsx from 'clsx'

function Dashboard() {
    const [play,setPlay] = useState(false)
    const ref = useRef()
    const inputRef = useRef()
    const handlePlay = ()=> {
        var tem = !play
        setPlay(tem)
      !play? ref.current.play() : ref.current.pause();
    }
    const handleTimeInput= ()=> {
        if(ref.current.duration){
            const progressPercent = Math.floor(
                (ref.current.currentTime / ref.current.duration) * 100
              );
              inputRef.current.value=progressPercent
        }
    }
    const handleChangeValue= (e)=> {
        const seekTime = (e.target.value * ref.current.duration) / 100;
        ref.current.currentTime = seekTime;
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
            <i className={clsx('fas','fa-pause',{'icon-hidden':!play})}></i>
            <i className={clsx('fas','fa-play',{'icon-hidden':play})}></i>
        </div>
        <div className="btn btn-next">
            <i className="fas fa-step-forward"></i>
        </div>
        <div className="btn btn-random">
            <i className="fas fa-random"></i>
        </div>
        </div>
        <input 
        id="progress" 
        className="progress" 
        type="range" 
        value="0"
        step="1" 
        min="0" 
        max="100"
        ref={inputRef}
        onChange={handleChangeValue}
        />
        <audio
        ref={ref}
         id="audio"
         src="./audio/EmKhongHieu-ChanggMinhHuy-7043556.mp3"
         onTimeUpdate={handleTimeInput}
         ></audio>
    </div>
  )
}

export default Dashboard