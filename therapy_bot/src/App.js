import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/nav';
import Login from './login';


function App() {
  return (
    <div>
      <Router>
          <Navbar />
        <Routes>
          {/* <Route path = "/" element={<Home/>}></Route> */}
          <Route path = "/" element={<Login/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

