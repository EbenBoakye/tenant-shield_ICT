
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TextAni from './components/TextAni';
import Form from './pages/Form';
//This is the method to call for the form page
  import Form from './pages/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

//
function App() {
  return (
    
      <div>
        <Navbar />
        {/* <Form /> */}
    // This is the page to route to the form page <Router>
                    <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/form" element={<Form />}/>
                    </Routes>
        </Router> 
  //
        <Hero />
        <TextAni />
        
      </div>
    
  );
}

export default App;

