import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Navbar';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Location from './Pages/Location';
import Work from './Pages/Work';
import News from './Pages/News';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/work" element={<Work />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
