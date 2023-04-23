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
    productImg: {
      type: String,
      default: "default_product.jpg",
    },
    productImgUrl: {
      type: String,
      default: "public/img/products/default_product.jpg",
    },
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
    addedBy: String,
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
