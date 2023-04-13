const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(authController.protect, productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .delete(authController.protect, productController.deleteProduct)
  .patch(authController.protect, productController.updateProduct);

module.exports = router;
