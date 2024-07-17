import React from 'react';
//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import { ShopContextProvider } from './context/Shop-context';


const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>

  )
};
export default App;