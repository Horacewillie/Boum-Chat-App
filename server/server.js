const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongooseConnect = require("./db/connection");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const AuthRoute = require("./routes/auth");
const ChannelRoute = require("./routes/channel");
const MessageRoute = require("./routes/message");

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

//Routes
app.use("/api/users", AuthRoute);
app.use("/api/channels", ChannelRoute);
app.use("/api/message", MessageRoute);

mongooseConnect(() => {
  app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
  });
});
