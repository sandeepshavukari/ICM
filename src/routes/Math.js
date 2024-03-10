import React, { useState } from 'react';
import axios from 'axios';

export default function SendMath() { // Rename to start with an uppercase letter, e.g., SendMath
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const entered = () => {
    const sendto = {
      username,
      password,
    };
    axios.post('http://localhost:8000/math', sendto)
      .then((response) => {
        console.log('Data entered successfully', response.data);
      })
      .catch((err) => {
        console.error('Error', err);
      });
  };

  return (
    <div>
      <h1>What are you even thinking? Please enter the details.</h1>
      <label>ID: </label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <label>Maths1: </label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={entered}>Submit</button>
    </div>
  );
}