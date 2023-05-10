
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/about' element={<About />} />
      <Route exact path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>

}

export default App;
