import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/bookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [editBook, setEditBook] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isListVisible, setIsListVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 3;

    const baseURL = 'https://books-backend-two.vercel.app:5000';

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get(baseURL);
        setBooks(response.data);
    };

    const handleDeleteClick = async (id) => {
        await axios.delete(`${baseURL}/${id}`);
        fetchBooks();
        showPopupMessage('Book deleted successfully!');
    };

    const handleAddOrUpdateBook = async (e) => {
        const bookData = { name, description };
        e.preventDefault()
        if (editBook) {
            await axios.put(`${baseURL}/${editBook._id}`, bookData);
            openEditPopup();
        } else {
            await axios.post(baseURL, bookData);
        }
        fetchBooks();
        closeEditPopup();
        showPopupMessage('Book updated successfully!');
    };

    const handleEditClick = (book) => {
        setEditBook(book);
        setName(book.name);
        setDescription(book.description);
        openEditPopup();
    };

    const openEditPopup = () => {
        setIsPopupOpen(true);
    };

    const closeEditPopup = () => {
        setIsPopupOpen(false);
        setName('');
        setDescription('');
        setEditBook(null);
    };

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(books.length / booksPerPage)) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const showPopupMessage = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const toggleDescription = (id) => {
        const updatedBooks = books.map(book => {
            if (book._id === id) {
                return { ...book, showFullDescription: !book.showFullDescription };
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className='container'>
            {showPopup && <p className="popup-message">{popupMessage}</p>}
            <h1 onClick={toggleListVisibility} className="header">Book List</h1>
            {isListVisible && (
                <ul>
                    {currentBooks.map((book, index) => (
                        <li key={book._id} style={{ animationDelay: `${index * 0.5}s` }}>
                            <p>Name: {book.name}</p>
                            <p
                                className={
                                    `description ${
                                        book.showFullDescription ? 'show' : ''
                                    }`
                                }
                                onClick={() => toggleDescription(book._id)}
                            >Description: {book.description}
                            </p>
                            <button
                                onClick={() => handleEditClick(book)}
                                className="success"
                            >Edit
                            </button>
                            <button
                                onClick={() => handleDeleteClick(book._id)}
                                className="danger">Delete
                            </button>
                        </li>
                    ))}
                    <div className="pagination">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(books.length / booksPerPage)}
                        >Next
                        </button>
                    </div>
                </ul>
            )
            }
            {
                isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>{editBook ? 'Edit' : 'Add'} Book</h2>
                            <h7>````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</h7>
                            <form onSubmit={handleAddOrUpdateBook}>
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
                                <button
                                    type="submit"
                                    className="save-button"
                                > {editBook ? 'Update' : 'Add'} Book
                                </button>
                                <button
                                    type="button"
                                    onClick={closeEditPopup}
                                    className="close-button"
                                > Close
                                </button>
                            </form>
                        </div>
                        <div className="popup-overlay" onClick={closeEditPopup}></div>
                    </div>
                )
            }
        </div >
    );
};

export default BookList;
