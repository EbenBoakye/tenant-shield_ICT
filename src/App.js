
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TextAni from './components/TextAni';
import Form from './pages/Form';

function App() {
  return (
    
      <div>
        <Navbar />
        {/* <Form /> */}
    //  <Router>
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

