import React from 'react'
import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Header/Banner/Banner';
import Header from './Components/Header/Header';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/Banner" element={<Banner/>}/>
      
      </Routes>
    </div>
  )
}

export default App
