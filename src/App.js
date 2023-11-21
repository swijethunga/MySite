import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Journey from './Pages/Journey';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React from 'react';
import Skills from './Pages/Skills';
//import Skill from './Pages/Skill';

function App() {


  return (
    <div className="App">
     
     {/* <Navbar/>
     <Home/>
     <Journey/>
     <Contact/>
     <Footer/> */}
     <Router>
      <Navbar/>
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Journey" element={<Journey/>}/>
        <Route path='/skill' element={<Skills/>}/>
      </Routes>

      
      
      <Footer/>
     </Router>

     

    </div>
  );
}

export default App;
