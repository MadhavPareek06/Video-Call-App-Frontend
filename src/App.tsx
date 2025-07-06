import './App.css'
import Home from './Pages/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Room from './Pages/Room.tsx'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/room/:id" element={<Room/>} />
    </Routes>
    </>
  )
}

export default App
