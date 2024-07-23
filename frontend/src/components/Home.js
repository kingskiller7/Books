import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleAddBook = async (e) => {
    e.preventDefault();
    await axios.post('https://books-backend-two.vercel.app:5000', { name, description });
    setName('');
    setDescription('');
    showPopupMessage('Book added successfully!');
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="box">
      {showPopup && <p className='popup-message'>{popupMessage}</p>}
      <h1>Add Book</h1>
      <form onSubmit={handleAddBook}>
        <label>Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn">Add Book</button>
      </form>
    </div>
  );
};

export default Home;
