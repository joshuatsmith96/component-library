import { Routes, Route } from 'react-router-dom'
import Directory from './core/Directory'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Directory />}/>
    </Routes>
  )
}

export default App
