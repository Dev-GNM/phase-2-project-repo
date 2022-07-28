import './App.css';
import './index.css';
import Slider from "./components/Slider"
import Navbar from "./components/Navbar"
import NewContent from "./components/NewContent"
import ViewContent from "./components/ViewContent"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <NewContent />
      <ViewContent />
      <Footer />
    </div>
  );
}

export default App;
