import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <Footer />
    </>
    
  );
}

export default App;
