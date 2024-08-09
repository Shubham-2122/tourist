import React from "react";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Website/Pages/Service";
import Packages from "./Website/Pages/Packages";
import Dashboard from "./Admin/Apages/Dashboard";
import PackMange from "./Admin/Apages/PackMange";
import Add_Packages from "./Admin/Apages/Add_Packages";
import ServiceMange from "./Admin/Apages/ServiceMange";
import Add_service from "./Admin/Apages/Add_service";
import Pagenotfound from "./Website/Pages/Pagenotfound";
import Alogin from "./Admin/Apages/Alogin";
import Ulogin from "./Website/Pages/Ulogin";
import Uregister from "./Website/Pages/Uregister";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Usermanage from "./Admin/Apages/Usermanage";
import Profile from "./Website/Pages/Profile";

function App() {
  return (
    <div className="App">
     {/* <h1>hello turist</h1> */}
     {/* <Home /> */}
     {/* <About /> */}
     <ToastContainer />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><About /></>} /> 
        <Route path="/service" element={<><Service /></>} /> 
        <Route path="/package" element={<><Packages /></>} /> 
        <Route path="*" element={<><Pagenotfound /></>} />
        <Route path="/ulogin" element={<><Ulogin /></>} />
        <Route path="/uregister" element={<><Uregister /></>} />
        <Route path="/profile" element={<><Profile /></>} />



        {/* hide route */}
        <Route path="/dashboard" element={<><Dashboard /></>} />
        <Route path="/packmange" element={<><PackMange /></>} />
        <Route path="/addpackage" element={<><Add_Packages /></>} />
        <Route path="/Servicemange" element={<><ServiceMange /></>} />
        <Route path="/addservice" element={<><Add_service /></>} />
        <Route path="/alogin" element={<><Alogin /></>} />
        <Route path="/usermanage" element={<><Usermanage /></>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
