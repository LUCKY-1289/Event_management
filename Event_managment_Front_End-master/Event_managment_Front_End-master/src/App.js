import React from "react";
import './App.css';
import  Login  from "./Login";
import  Register  from "./Register";
import  Home  from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";
import Gallery from "./Gallery"; 
import Budget from "./Budget";
import Calandar from "./Calandar";
import ClubPage from './ClubPage';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div className="App">
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Calander" element={<Calandar/>} />
          <Route path="/Budget" element={<Budget/>} />
          <Route path="/ClubPage" element={<ClubPage/>} />
          <Route path="/Gallery" element={<Gallery/>} />
        </Routes>
    
    </div>
  );
}

export default App;