const mongoose = require("mongoose");

const notesSchema = {
Name: String,
Email: String,
PhoneNumber:String

}
const Note = mongoose.model("Note", notesSchema);
module.exports = Note;