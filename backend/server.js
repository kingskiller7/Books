const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookController = require('./controller');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({
    // origin: 'https://books-frontend-lemon.vercel.app',
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

const url = process.env.MONGODB_URL;
mongoose.connect(url);

app.get('/', (req, res) => {
    res.json("Hello");
})
app.post('/books', bookController.addBook);
app.get('/books', bookController.getBooks);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

app.listen(5000, () => console.log('Server running on port 5000'));
