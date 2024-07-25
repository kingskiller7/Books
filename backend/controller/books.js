const Book = require('../model/books');

exports.addBook = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newBook = new Book({ name, description });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, { name, description }, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
