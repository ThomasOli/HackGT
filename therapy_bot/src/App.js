import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/nav';
import Login from './login';
import Journals from './Components/journals';

const BlueBorder = () => {
  return <div style={{ backgroundColor: 'blue', height: '5px', width: '100%' }}></div>;
};

function App() {
  return (
      <Router>
          <Navbar />
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/journal" element={<Journals/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

