import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/nav';
<<<<<<< HEAD
import Login from './login';

=======
import Journals from './Components/journals';
>>>>>>> 2b0f285d787cc7bd09ccde11bafa55c9ace8da93

function App() {
  return (
      <Router>
          <Navbar />
        <Routes>
<<<<<<< HEAD
          {/* <Route path = "/" element={<Home/>}></Route> */}
          <Route path = "/" element={<Login/>}></Route>
        </Routes>
      </Router>

    </div>
=======
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/journals" element={<Journals/>}></Route>
        </Routes>
      </Router>
>>>>>>> 2b0f285d787cc7bd09ccde11bafa55c9ace8da93
  );
}

export default App;

