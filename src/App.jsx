import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header' 
import Main from './components/Main'
import PopNewCard from './components/popups/PopNewCard'
import PopExit from './components/popups/PopExit'
import PopBrowse from './components/popups/PopBrowse'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="wrapper">
    <PopExit />
    <PopNewCard />
    <PopBrowse />

    <Header />
    <Main loading={loading}/>
    </div>
  )
}

export default App
