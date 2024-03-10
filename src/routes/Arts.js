import React from 'react';
import art1 from '../routes/art1.jpg';
import art2 from '../routes/art2.jpg';
import art3 from '../routes/art3.jpg';
import art4 from '../routes/art4.jpg';
import art5 from '../routes/art5.jpg';
import art6 from '../routes/art6.jpg';
import art7 from '../routes/art7.jpg';
import art8 from '../routes/art8.jpeg';
import './Arts.css'; // Import the CSS file for styling

const Arts = () => {
  // Assuming you have an array of art objects with image URLs and names
  const arts = [
    { name: 'Art 1', image: art1 },
    { name: 'Art 2', image: art2 },
    { name: 'Art 3', image: art3 },
    { name: 'Art 4', image: art4 },
    { name: 'Art 5', image: art5 },
    { name: 'Art 6', image: art6 },
    { name: 'Art 7', image: art7 },
    { name: 'Art 8', image: art8 },
  ];

  return (
    <div className="arts-container">
      <h1>Indian Arts</h1>
      <div className="arts-grid">
        {arts.map((art, index) => (
          <div className="arts-item" key={index}>
            <img src={art.image} alt={art.name} />
            <p>{art.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arts;
