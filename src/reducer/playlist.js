const initialState = {
    playlist :[
        {
          name: "Click Pow Get Down",
          singer: "Raftaar x Fortnite",
          path: "./audio/Sai-Cach-Yeu-Le-Bao-Binh.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./audio/Sao-Ta-Nguoc-Loi-DinhDung.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path: "./audio/EmKhongHieu-ChanggMinhHuy-7043556.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
    
        {
          name: "Lac Long Co Doc Vuong",
          singer: "Raftaar x Brobha V",
          path: "./audio/LacLongCoDocVuong3DaiMeoRemix-ThienTu-7026210.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
        {
          name: "Co Doc Vuong",
          singer: "Raftaar x Brobha V",
          path: "./audio/CoDocVuongDaiMeoRemix-ThienTu-6946271.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
    
        {
          name: "Toi Luon Nha",
          singer: "Raftaar x Brobha V",
          path: "./audio/RoiToiLuon-Nal-7064237.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
                ]
}

const playlist = (state=initialState, actions)=> {
    switch(actions.type){


        default: return state;
    }

}

export default playlist