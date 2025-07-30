import { Routes, Route } from 'react-router-dom'
import Directory from './core/pages/Directory'
import Header from './core/components/Header'
import './App.css'
import TabSelector from './components/TabSelector'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="/comp-test" element={<TabSelector />}/>
      </Routes>
    </div>
  )
}

export default App
