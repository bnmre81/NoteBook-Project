const express = require("express");
const router = express.Router();
const { noteList, fetchNotes } = require("../controllers/noteControllers");

router.param("noteId", async (req, res, noteId, next) => {
  const note = await fetchNotes(noteId, next);
  if (note) {
    req.note = note;
    next();
  } else {
    const error = new Error("note not found!");
    error.status = 404;
    next(error);
  }
});

router.get("/", noteList);

module.exports = router;
