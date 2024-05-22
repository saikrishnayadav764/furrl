
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import HorizontalScrollbar from './components/HorizontalScrollbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='application'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HorizontalScrollbar />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
