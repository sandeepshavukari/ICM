import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../routes/login.css';
import backgroundImg from '../routes/image.png';

export default function Login({ store }) {
  const handleSubmit = async () => {
    const email = document.getElementById("idun").value;
    const password = document.getElementById("idpw").value;

    try {
      const response = await axios.post('http://localhost:8085/login', {
        email,
        password
      });

      console.log(response.data);

      if (response.status === 200) {
        // Login successful, handle accordingly
        console.log("Login Successful!");
        // Display success message
        toast.success("Login Successful!");
        // Redirect to the home page after a short delay
        setTimeout(() => {
          window.location.href = '/home';
        }, 1500);
      } else {
        // Handle other cases (e.g., invalid credentials or user not found)
        toast.error(response.data.message || 'An error occurred during login.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during login. Check the credentials and try again.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="login-heading">Login</h2>
        <div className="input-group">
          <label htmlFor="idun" className="input-label">Username:</label>
          <input type="text" id="idun" className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="idpw" className="input-label">Password:</label>
          <input type="password" id="idpw" className="input-field" />
        </div>
        <button type="button" className="login-button" onClick={handleSubmit}>Login</button>
        <Link to='/signup'>Don't have an account? Click here</Link>
      </form>

      {/* React Toastify container */}
      <ToastContainer />
    </div>
  );
}
