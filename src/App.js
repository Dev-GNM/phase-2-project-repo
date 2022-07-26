import './App.css';
import './index.css';
import Slider from "./components/Slider"
import Navbar from "./components/Navbar"
import NewContent from "./components/NewContent"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <NewContent />
    </div>
  );
}

export default App;
