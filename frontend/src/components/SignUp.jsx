import React from 'react';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;