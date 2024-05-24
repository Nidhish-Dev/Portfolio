import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About'
import Projects from './pages/Projects'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio/main" element={<Main />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
