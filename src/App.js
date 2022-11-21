import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';


import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Tvshow from './components/Tvshow';
import Mylist from './components/Mylist';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='tvshow' element={<Tvshow />} />
          <Route path='mylist' element={<Mylist />} />
          <Route path='about' element={<About />} />
          <Route path='faqs' element={<Faqs />} />
        </Routes>
      <Footer />
    </>
    
  );
}

export default App;
