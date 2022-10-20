import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams
} from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
import Technology from './Components/Technology';
import { useEffect } from 'react';

function App() {

  const getCurrentPageName = () => {
    const currentPage = window.location.pathname.split("/");
    return currentPage[1];
  }

  // set the current page background image based on the screen size
  const setBackground = (currentPage) => {
    if (window.innerWidth <= 650) {
      document.body.style.backgroundImage = `url(${require(`./images/${currentPage}_bg_mobile.jpg`)})`;
    } else if (window.innerWidth <= 1100) {
      document.body.style.backgroundImage = `url(${require(`./images/${currentPage}_bg_tablet.jpg`)})`;
    } else if (window.innerWidth > 1100) {
      document.body.style.backgroundImage = `url(${require(`./images/${currentPage}_bg.jpg`)})`;
    }
  }

  useEffect(() => {
    function handleResize() {
      const currentPage = getCurrentPageName(); 
      setBackground(currentPage);
    }

    window.addEventListener('resize', handleResize);
  });
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home setBackground={setBackground}/>} />
        <Route path='/destination' element={<Destination setBackground={setBackground}/>} />
        <Route path='/crew' element={<Crew setBackground={setBackground}/>} />
        <Route path='/technology' element={<Technology setBackground={setBackground}/>} />
      </Routes>
    </Router>
  );
}

export default App;
