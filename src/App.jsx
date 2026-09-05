import { useState } from 'react'
import './App.css'
import Header from './components/Header' 
import Main from './components/Main'
import PopNewCard from './components/popups/PopNewCard'
import PopUser from './components/popups/PopUser'
import PopBrowse from './components/popups/PopBrowse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
    <PopUser />
    <PopNewCard />
    <PopBrowse />

    <Header />
    <Main />
    </div>
  )
}

export default App
