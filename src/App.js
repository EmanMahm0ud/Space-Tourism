import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
import Technology from './Components/Technology';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
    </Router>
  );
}

export default App;
