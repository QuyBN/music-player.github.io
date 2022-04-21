import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function Playlist() {
    const songs = useSelector(state => state.songs)
    console.log(songs)
    const {playlist} = songs
    console.log(playlist)
  return (
    <div className="playlist">
      {playlist.map((song,index) => 
                      (
                            <div className="song" key={index}>
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