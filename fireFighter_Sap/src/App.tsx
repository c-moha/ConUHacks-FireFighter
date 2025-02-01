import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppBar from "./components/Appbar";
import Logo from './components/Logo';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <AppBar />
    <Logo />  
  </div>

  )
}

export default App
