const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Task Server is running...on ${port}`);
});
