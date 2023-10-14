import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/nav';
import Journals from './Components/journals';

function App() {
  return (
      <Router>
          <Navbar />
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/journals" element={<Journals/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
