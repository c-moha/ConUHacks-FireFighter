import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppBar from "./components/Appbar";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <AppBar />
  </div>

  )
}

export default App
