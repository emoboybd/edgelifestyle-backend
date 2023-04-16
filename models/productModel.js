const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product must have a name"],
      unique: true,
      trim: true,
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
    category: {
      type: String,
      default: "panjabi",
    },
    moreInfo: {
      type: String,
    },
    material: {
      typr: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
