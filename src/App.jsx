import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./pages/Board.jsx";
import Rect from "./pages/Rect.jsx";
import Gravity from "./pages/Gravity.jsx";
import MouseEvent from "./pages/MouseEvent.jsx";
import Shapes from "./pages/Shapes.jsx";
import CircleMove from "./pages/CircleMove.jsx";


function App() {
  const Home = () => <h1>home page</h1>;

  return (
    <>
      <Router>
        <nav>
          <ul style={{ display: "flex", gap: "20px" }}>
            <li>
              <Link to="/board">Board</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rect">Rectangular game</Link>
            </li>
            <li>
              <Link to="/circle">Circle</Link>
            </li>
            <li>
              <Link to="/gravity">gravity</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/shapes">Shapes</Link>
            </li>
          
          </ul>
        </nav>

        <Routes>
          <Route path="/board" element={<Board />} />
          <Route path="/" element={<Home />} />
          <Route path="/rect" element={<Rect />} />
          <Route path="/circle" element={<CircleMove/>} />
          <Route path="/gravity" element={<Gravity />} />
          <Route path="/event" element={<MouseEvent />} />
          <Route path="/shapes" element={<Shapes />} />
           
        </Routes>
      </Router>
    </>
  );
}

export default App;
