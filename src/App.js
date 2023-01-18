import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import AppBar from './components/AppBar';
import Jumbo from './components/Jumbo';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Service from './components/Service';
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized';
import Payment from './components/Payment';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="Service" element={<Service />} />
        <Route path="Payment" element={<Payment />} />

        //<Route element={<RequireAuth />}>
          
        // </Route>
        // <Route element={<RequireAuth />}>
          
        // </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
