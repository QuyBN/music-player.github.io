import React, {useState, useRef } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import {nextSong,prevSong} from '../../actions'

function Dashboard() {
    // get data from store
    const songs = useSelector(state => state.songs)
    const {playlist,currentsong,isPlaying} = songs

    const dispatch = useDispatch()
    const [play,setPlay] = useState(false)
    const ref = useRef()
    const inputRef = useRef()
    const cdRef =useRef()


    const handlePlay = ()=> {

        !play? ref.current.play() : ref.current.pause();
        // var tem = !play
        setPlay(!play)
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
    // handle next song
    const handleNextSong = () => {
        const actions = nextSong()
        dispatch(actions)
        console.dir(ref.current)
        // handlePlay()
    }
    // handle prevSong
    const handlePrevSong = () => {
        const actions = prevSong()
        dispatch(actions)
        // handlePlay()
    }
    // xử lý thu phóng img
    if(cdRef.current){
      const cdWidth=  cdRef.current.offsetWidth
      document.onscroll = function (){
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const newcdWidth= cdWidth - scrollTop;
          cdRef.current.style.width = newcdWidth > 0 ? newcdWidth + "px" : 0;
          cdRef.current.style.opacity = newcdWidth/cdWidth;
      }
    }
  return (
    <div className="dashboard">
        <header>
        <h4>Now playing:</h4>
        <h2>String 57th & 9th</h2>
        </header>
        <div 
        className="cd"
        ref={cdRef}
        
        >
            <div 
             className="cd-thumb"  style={{backgroundImage:`url(${playlist[currentsong].image})`}}>
            </div>
        </div>
        <div className="control">
            <div className="btn btn-repeat">
                <i className="fas fa-redo"></i>
            </div>
        <div 
        className="btn btn-prev"
        onClick={handlePrevSong}
        >
            <i className="fas fa-step-backward"></i>
        </div>
        <div 
            className="btn btn-toggle-play"
            onClick={handlePlay}
        
        >
            <i className={clsx('fas','fa-pause',{'icon-hidden':!play})}></i>
            <i className={clsx('fas','fa-play',{'icon-hidden':play})}></i>
        </div>
        <div 
        className="btn btn-next"
        onClick={handleNextSong}
        >
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
         src={playlist[currentsong].path}
         onTimeUpdate={handleTimeInput}
         ></audio>
    </div>
  )
}

export default Dashboard