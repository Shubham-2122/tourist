import React from "react";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Website/Pages/Service";
import Packages from "./Website/Pages/Packages";

function App() {
  return (
    <div className="App">
     {/* <h1>hello turist</h1> */}
     {/* <Home /> */}
     {/* <About /> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><About /></>} /> 
        <Route path="/service" element={<><Service /></>} /> 
        <Route path="/package" element={<><Packages /></>} /> 
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
