import './App.css'
import Maindash from './components/maindash/Maindash';
import RightSide from './components/rightside/RightSide';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Maindash />
          <RightSide />
        </div>
    </div>
  );
}

export default App;
