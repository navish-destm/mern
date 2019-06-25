const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose connection established.");
});

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Server started at ${port}`));
