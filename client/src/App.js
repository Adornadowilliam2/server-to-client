import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // 1. "GET" the data from the API
  const getItems = async () => {
    const response = await fetch('http://localhost:5000/api/items');
    const data = await response.json();
    setItems(data);
  };

  // 2. "POST" new data to the API
  const addItem = async () => {
    await fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: input }),
    });
    setInput('');
    getItems(); // Refresh the list
  };

  useEffect(() => { getItems(); }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Client-Server Sample</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItem}>Add to Server</button>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;