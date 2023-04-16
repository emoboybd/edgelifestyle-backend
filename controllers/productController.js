const APIFeatures = require("../utils/APIFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Product = require("./../models/productModel");

exports.aliasEidCollection = (req, res, next) => {
  // category
  req.query.size = "XL";
  req.query.limit = 10;
  req.query.sort = "-price";

  next();
};

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .panginate();

  const products = await features.query;

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    next(new AppError("Tour can not be found with this ID!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(204).json(null);
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(204).json({
    status: "success",
    data: {
      product: updatedProduct,
    },
  });
});
