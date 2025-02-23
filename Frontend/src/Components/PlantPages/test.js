import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Test = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5001/plants')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      <h1>Items from MongoDB</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
