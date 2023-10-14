import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Quiz from './Components/quiz';
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
<<<<<<< HEAD
          <Route path = "/quiz" element={<Quiz/>}></Route>
=======
          <Route path = "/Login" element={<Login/>}></Route>
>>>>>>> a30eb46f79e2b8683d8c98d3581be454b9146330
        </Routes>
      </Router>
  );
}

export default App;

