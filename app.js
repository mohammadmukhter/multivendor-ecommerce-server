// external imports
const express = require("express");
const dotEnv = require("dotenv");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
dotEnv.config();
const port = process.env.PORT || 5000;

// internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./api/middlewares/common/notFoundHandler");

const usersRouters = require("./api/router/usersRouters");

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

//   request parser
app.use(express.json());
// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/users", usersRouters);

// 404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

// app listener
app.listen(port, () => {
  console.log(`app listening to the port: ${port}`);
});
