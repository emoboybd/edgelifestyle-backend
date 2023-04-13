const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errController");
const cors = require("cors");

const express = require("express");
const AppError = require("./utils/appError");

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ROOUTES
app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
