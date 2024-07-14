import React from 'react';
//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';


const App = () => {
  return (
    <Router> 
       <Navbar />
      <Routes>
        <Route  path='/' element={<Shop />}  />
        <Route path='/Cart' element={<Cart />}  />
      </Routes>
    </Router>
  )
};
export default App;