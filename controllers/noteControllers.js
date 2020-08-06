const { Note, Notebook } = require("../db/models");

exports.fetchNotes = async (noteId, next) => {
  try {
    const note = await Note.findByPk(noteId);
    return note;
  } catch (error) {
    next(error);
  }
};

exports.noteList = async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      //   include: { as: "notebook", model: Notebook, attributes: ["name"] },
    });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};
