const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");
router.route("/create").post((req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    
    const newNote = new Note({
        Name,
        Email,
        PhoneNumber
    });
  newNote.save();
}
)

//

module.exports = router;