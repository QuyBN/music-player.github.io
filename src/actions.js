export const nextSong = ()=> {
    return {
        type:'dashboard/nextSong'
    }
}
export const prevSong = ()=> {
    return {
        type:'dashboard/prevSong'
    }
}
export const playSongWhenClick = (data)=> {
    return {
        type:'dashboard/playSongWhenClick',
        payload: data
    }
}