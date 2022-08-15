const express = require("express");
const router = express.Router();
const moves = require("../../Moves");

router.get("/", (req, res) => {
  res.json(moves);
});

router.get("/:id", (req, res) => {
  const found = moves.some((move) => move.id === parseInt(req.params.id));
  if (found) {
    res.json(moves.filter((move) => move.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "No move found" });
  }
});

router.post("/", (req, res) => {
  const newMove = {
    id: req.body.id,
    move: req.body.move,
  };

  if (!newMove.id || !newMove.move) {
    return res.status(400).json({ msg: "Please inculde move" });
  }

  moves.push(newMove);

  res.json(moves);
});

// app.post("/", (req, res) => {

// });

module.exports = router;
