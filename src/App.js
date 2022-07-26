import './App.css';
import './index.css';
import Slider from "./components/Slider"
import Navbar from "./components/Navbar"
import NewContent from "./components/NewContent"
import ShareContent from "./components/ShareContent"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <NewContent />
      <ShareContent />
      <Footer />
    </div>
  );
}

export default App;
