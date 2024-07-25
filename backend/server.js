const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookController = require('./controller/books');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
// app.use(cors({
//     origin: 'https://books-frontend-lemon.vercel.app',
//     // origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));
app.use(bodyParser.json());
app.use(helmet());

const url = process.env.MONGODB_URL;
mongoose.connect(url, { 
    useNewUrlParser: true, useUnifiedTopology:true 
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log(err));

app.post('/books', bookController.addBook);
app.get('/books', bookController.getBooks);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

app.listen(5000, () => console.log('Server running on port 5000'));
