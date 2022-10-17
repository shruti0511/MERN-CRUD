const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//get all books
router.get('/books', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Book.find({}, 'title author price published_year')
    .then((data) =>res.json(data))
    .catch(next);
});

//add book
router.post('/books', (req, res, next) => {
  if (req.body.title) {
    Book.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

//to delete book
router.delete('/books/:id', (req, res, next) => {
    Book.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

//to get book
router.get('/books/:id', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Book.findById(req.params.id, 'title author price published_year')
    .then((data) => res.json(data))
    .catch(next);
});

//to update book
router.put('/books', (req, res, next) => {


  if (req.body._id) {
    Book.findByIdAndUpdate(req.body._id,req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

module.exports = router;