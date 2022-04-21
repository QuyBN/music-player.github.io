import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dasboah/Dashboard';
import Playlist from './component/PlayLists/Playlist';
import Test from './component/test/Test'

function App() {
  return (
    <div className="App">
    <div className="player">
      <Dashboard></Dashboard>
      <Playlist></Playlist>
      <Test url='./audio/CoDocVuongDaiMeoRemix-ThienTu-6946271.mp3'></Test>
    </div>
    </div>
  );
}

export default App;
