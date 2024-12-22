import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import RecommendedItems from './components/RecommendedItems';
import Categories from './components/Categories';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recommended" element={<RecommendedItems />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;