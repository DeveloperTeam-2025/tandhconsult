import { useState } from 'react'
import Home from './Pages/Home/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    </>
  )
}

export default App
