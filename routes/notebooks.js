const express = require("express");
const router = express.Router();
const {
  notebookCreate,
  noteCreate,
  notebookList,
  fetchNotebooks,
} = require("../controllers/notebookControllers");

router.param("notebookId", async (req, res, next, notebookId) => {
  const notebook = await fetchNotebooks(notebookId, next);
  if (notebook) {
    req.notebook = notebook;
    next();
  } else {
    const error = new Error("notebook not found!");
    error.status = 404;
    next(error);
  }
});

router.get("/", notebookList);

router.post("/", notebookCreate);

router.post("/:notebookId/notes", noteCreate);

module.exports = router;
