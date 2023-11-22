const express = require("express");

const cors = require("cors");
const aiRouter = require("./Controller/ChatController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", aiRouter);

app.listen(3050, () => {
  console.log("Server is running");
});
