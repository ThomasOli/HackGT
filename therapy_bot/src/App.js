import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/nav';
import Journals from './Components/journals';
import Login from './Components/Pages/login';

function App() {
  return (
      <Router>
          <Navbar />
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/journal" element={<Journals/>}></Route>
          <Route path = "/Login" element={<Login/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

