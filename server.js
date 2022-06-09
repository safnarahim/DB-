const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://dbuser:user24@nodesdb.pluwc.mongodb.net/nodesDB")

app.use("/" , require("./routes/noteRoute"));

app.listen(3001, function(){
    console.log("expres server is running on port 3001")
}

)