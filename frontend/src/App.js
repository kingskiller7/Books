import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/bookList';
import Navbar from './components/Navbar';
import Home from './components/Home';
const http = require('http');

setInterval(() => {
  http.get('https://books-ctyk.onrender.com:5000', (res) => {
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
}, 300000);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booklist" element={<BookList />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
