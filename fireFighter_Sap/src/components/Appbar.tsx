// src/components/Appbar.tsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './Appbar.css';
import './Sidebar.css';

const AppBar = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/incident">Incident</Link></li>
            <li><Link to="/firefighters">Available Firefighters</Link></li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
        

          {/* Routes */}
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/incident" element={<div>Incident Page</div>} />
            <Route path="/firefighters" element={<div>Available Firefighters Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppBar;
