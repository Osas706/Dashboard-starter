import './App.css'
import Maindash from './components/maindash/Maindash';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Maindash />
          <div></div>
        </div>
    </div>
  );
}

export default App;
