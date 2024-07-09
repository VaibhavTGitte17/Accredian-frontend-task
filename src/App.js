import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
    <Navbar />
     <Home />
     <About />
     <Resources />
     <Contactus />
     <Footer />
    </div>
  );
}

export default App;
