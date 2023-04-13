const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must have a name"],
    unique: true,
  },
  productCode: {
    type: String,
    required: [true],
    unique: [true, "Product with the same code already exists"],
  },
  productImage: String,
  price: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  size: {
    type: String,
    required: [true, "Product must have a size"],
  },
  description: {
    type: String,
    required: [true, "Product must have a description"],
  },
  moreInfo: {
    type: String,
  },
  material: {
    typr: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
