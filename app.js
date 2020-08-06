const express = require("express");
const db = require("./db");
const noteRoutes = require("./routes/notes");
const notebookRoutes = require("./routes/notebooks");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/notes", noteRoutes);
app.use("/notebooks", notebookRoutes);

app.use((req, res, next) => {
  res.status(404).json("path not found!");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message || "internal server error!" });
});

const run = async () => {
  try {
    await db.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }

  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};
run();
