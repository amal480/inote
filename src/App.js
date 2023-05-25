
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [alert, setalert] = useState(null)

  const showalert = (text, type) => {
    setalert({
      msg: text,
      type: type
    }
    )

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (<>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About />} />
            {/* <Route exact path='/home' element={<Home />} /> */}
            <Route exact path='/' element={<Home showalert={showalert} />} />
            <Route exact path='/login' element={<Login showalert={showalert}/>} />
            <Route exact path='/signup' element={<Signup showalert={showalert}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  </>
  )

}

export default App;
