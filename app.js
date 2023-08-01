// external imports
const express = require("express");
const dotEnv = require("dotenv");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
dotEnv.config();
const port = process.env.PORT || 3000;

// internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./api/middlewares/common/notFoundHandler");
const usersRouter = require("./api/router/usersRouter");
const categoryRouter = require("./api/router/categoryRouter");

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// routing setup
// user router
app.use("/users", usersRouter);

// category router
app.use("/category", categoryRouter);

// 404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

// app listener
app.listen(port, () => {
  console.log(`app listening to the port: ${port}`);
});
