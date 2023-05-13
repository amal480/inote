
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

function App() {
  return (<>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About />} />
            {/* <Route exact path='/home' element={<Home />} /> */}
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  </>
  )

}

export default App;
