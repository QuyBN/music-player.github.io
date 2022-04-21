import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dasboah/Dashboard';
import Playlist from './component/PlayLists/Playlist';

function App() {
  return (
    <div className="App">
    <div className="player">
      <Dashboard></Dashboard>
      <Playlist></Playlist>
    </div>
    </div>
  );
}

export default App;
