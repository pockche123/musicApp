

import './App.css'
import Album from './components/Album/Album';
import HomePage from './components/Home/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/album" element={<Album/>} />
      </Routes>
  
    </div>
  )
}

export default App
