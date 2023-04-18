const multer = require("multer");
const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/eid-collection")
  .get(productController.aliasEidCollection, productController.getAllProducts);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    productController.uploadProductPhoto,
    productController.resizeUserPhoto,
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(
    authController.protect,
    productController.uploadProductPhoto,
    productController.resizeUserPhoto,
    productController.updateProduct
  )
  .delete(authController.protect, productController.deleteProduct);

module.exports = router;
