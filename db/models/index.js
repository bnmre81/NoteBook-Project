const Note = require("./Note");
const Notebook = require("./Notebook");
const Tag = require("./Tag");

Notebook.hasMany(Note, {
  as: "notes",
  foreignKey: "notebookId",
  allowNull: false,
});
Note.belongsTo(Notebook, {
  as: "notebook",
  foreignKey: "notebookId",
});
module.exports = { Note, Notebook, Tag };
