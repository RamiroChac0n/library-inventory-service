const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
};

exports.updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(book);
};

exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
};