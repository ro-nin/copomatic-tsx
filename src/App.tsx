
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <div className="App bgDrawersGradient scroll-smooth">
      <div className="flex flex-col " >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>

      </div>
    </div>

  );
}

export default App;
