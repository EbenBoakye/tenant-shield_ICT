
import React from 'react';
import Navbar from './components/Navbar';
import Hero1 from "./components/Hero";
import EligiblePage from './pages/EligiblePage';
import TextAni from './components/TextAni';
import Form from './pages/Form';
/*his is the method to call for the form page*/
  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    
      <div>
        
        {/* <Form /> */}
    {/* This is the page to route to the form page */}
        <Router>
        <Navbar />
                    <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/form" element={<Form />}/>
                    <Route path="/eligibility" element={<EligiblePage />} />
                    </Routes>
                    <Hero1 />
        </Router> 
  
        
        <TextAni />
        
      </div>
    
  );
}

export default App;

