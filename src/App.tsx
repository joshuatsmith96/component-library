import { Routes, Route } from 'react-router-dom'
import Directory from './core/pages/Directory'
import Header from './core/components/Header'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Directory />}/>
    </Routes>
    </div>
  )
}

export default App
