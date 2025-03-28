import ReactDOM from "react-dom/client"
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./pages/Board.jsx";


function App() {

 const Home=()=><h1>home page</h1>
  


  return (
    <>
    <Router>
      <nav>
        <ul>
          <li><Link to="/board">Board</Link></li>
          <li><Link to="/">Home</Link></li>
         
        </ul>
      </nav>

      <Routes>
        <Route path="/board" element={<Board/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    
     
    </>
  )
}

export default App
