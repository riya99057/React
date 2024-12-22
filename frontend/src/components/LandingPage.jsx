import React from 'react';
import './LandingPage.css'; 
import RecommendedItems from './RecommendedItems';
import Categories from './Categories';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="slogan">
        <h1>Your One-Stop Shop for Everything!</h1>
      </div>
      <div className="categories-section">
        <Categories /> 
      </div>
      <div className="recommended-section">
        <RecommendedItems /> 
      </div>
    </div>
  );
};

export default LandingPage;