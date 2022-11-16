const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  titre: {
    type: String,
   require:true,
  },
  auteur: {
    type: String,
    require:true,
  },
 prix: {
    type: Number,
    require:true,
  }
});

module.exports = mongoose.model("Book", BookSchema);
