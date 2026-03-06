require("dotenv").config();
const express = require("express");
const cors = require("cors");
const messageController = require("./controllers/messageController");
const multer = require("multer");
const upload = multer();
// listen to port 3000
const { PORT = 3001 } = process.env;

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // frontend origin
  }),
);

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});

app.post("/messages", upload.none(), messageController.handleMessage);
