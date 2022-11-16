const router = require("express").Router();
const { getBooks ,createBook,updateBook,deleteBook} = require("./controllers/book");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/books", getBooks);
router.post("/books", createBook);
router.put("/books/edit/:id", updateBook);
router.delete("/books/delete/:id", deleteBook);

module.exports = router;
