import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/bookList';
import Navbar from './components/Navbar';
import Home from './components/Home';


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
