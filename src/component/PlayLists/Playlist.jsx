import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx'
import {playSongWhenClick} from '../../actions'

function Playlist() {
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch()
    const {playlist,currentsong} = songs
    const handleSongWhenClick =(data)=> {
       dispatch(playSongWhenClick(data))
    }
  return (
    <div className="playlist">
      {playlist.map((song,index) => 
                      (
                        <div 
                          className={clsx('song',{'active':index===currentsong})}
                          key={index}
                          onClick={()=>{handleSongWhenClick(index)}}
                        >
                            <div className="thumb" style={{backgroundImage:`url(${song.image})`}}></div>
                            <div className="body">
                            <h3 className="title">{song.name}</h3>
                            <p className="author">{song.singer}</p>
                            </div>
                            <div className="option">
                            <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                     )
                    )}
    </div>
  )
}

export default Playlist