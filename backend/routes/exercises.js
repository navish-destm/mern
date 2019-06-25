const router = require("express").Router();
let Exercise = require("../models/exercise.mode");

router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const duration = Number(req.body.duration);

  const newExercise = new Exercise({ username, description, date, duration });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
