
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./pages/Board.jsx";
import Rect from "./pages/Rect.jsx";
import Circle from "./pages/Circle.jsx";




function App() {

 const Home=()=><h1>home page</h1>
  


  return (
    <>
    <Router>
      <nav >
        <ul>
          <li><Link to="/board">Board</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rect">Rectangular game</Link></li>
          <li><Link to="/circle">Circle</Link></li>
           
         
        </ul>
      </nav>

      <Routes>
        <Route path="/board" element={<Board/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/rect" element={<Rect/>}/>
        <Route path="/circle" element={<Circle/>}/>
         
       
      </Routes>
    </Router>
    
     
    </>
  )
}

export default App
