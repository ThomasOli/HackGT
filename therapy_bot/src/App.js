import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Quiz from './Components/quiz';
import Navbar from './Components/nav';
import Chat from './Components/chat'
import Journals from './Components/journals';

function App() {
  return (
      <Router>
          <Navbar />
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/journal" element={<Journals/>}></Route>
          <Route path = "/chat" element={<Chat/>}></Route>
          <Route path = "/quiz" element={<Quiz/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

