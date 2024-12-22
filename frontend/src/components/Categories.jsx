import React from 'react';
import './Categories.css';

const categories = [
  { id: 1, name: 'Electronics', image: 'Put your image link here' },
  { id: 2, name: 'Fashion', image: 'Put your image link here' },
  { id: 3, name: 'Home & Garden', image: 'Put your image link here' },
  { id: 4, name: 'Sports', image: 'Put your image link here' },
];

const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;