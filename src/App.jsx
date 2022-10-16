import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Venues from './pages/Venues';
import OpenVenue from './pages/OpenVenue';
import Dashbaord from './pages/Dashboard';


function App() {
  return (
      <div className="App">
        <Navbar/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Dashbaord/>}></Route>
        <Route path="/venues" element={<Venues/>}></Route>
        <Route path="/venues/:id" element={<OpenVenue />} />
      </Routes>
      </div>
    </div>

  )
}

export default App
