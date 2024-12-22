import React, { useState } from 'react';
import './RecommendedItems.css';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'Put your image link here' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'Put your image link here' },
  { id: 3, name: 'Product 3', price: 49.99, image: 'Put your image link here' },
  { id: 4, name: 'Product 4', price: 59.99, image: 'Put your image link here' },
  { id: 5, name: 'Product 5', price: 69.99, image: 'Put your image link here' },
  { id: 6, name: 'Product 6', price: 79.99, image: 'Put your image link here' },
  { id: 7, name: 'Product 7', price: 89.99, image: 'Put your image link here' },
  { id: 8, name: 'Product 8', price: 99.99, image: 'Put your image link here' },
];

const RecommendedItems = () => {
  return (
    <div className="recommended-items">
      <h2>Recommended Items</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button className="add-to-cart">Add to Cart</button>
      <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
        ❤️
      </button>
    </div>
  );
};

export default RecommendedItems;