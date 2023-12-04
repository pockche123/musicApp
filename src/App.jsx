

import './App.css'
import Album from './components/Album';
import HomePage from './components/HomePage'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div className="app">
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/album" element={<Album/>} />
      </Routes>
  
    </div>
  )
}

export default App
