import './App.css';
import './index.css';
import Slider from "./components/Slider"
import Navbar from "./components/Navbar"
import NewContent from "./components/NewContent"
import ShareContent from "./components/ShareContent"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <NewContent />
      <ShareContent />
    </div>
  );
}

export default App;
