const Book = require("../model/book")

//all books
const getBooks = (req, res) => {
  Book.find((err, books) => {
    if (err) {
      res.send(err);
    }
    res.json(books);
  });
  };
  
 
//add new book
const createBook = (req, res) => {
  const titre=req.body.titre;
   const auteur=req.body.auteur;
  const prix=req.body.prix;
    const book = new Book({
        titre,
        auteur,
        prix,
    });
    book.save((err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    });
  };


  //edit boxDecorationBreak: 

const updateBook = (req, res) => {
  Book.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        titre: req.body.titre,
        auteur: req.body.auteur,
        prix: req.body.prix,
      },
    },
    { new: true },
    (err, Book) => {
      if (err) {
        res.send(err);
      } else res.json(Book);
    }
  );
};

//delete

const deleteBook = (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "Book Deleted" }))
    .catch((err) => res.send(err));
}
  module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
  };