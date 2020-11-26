const mongoose = require("mongoose");
const questionSchema = require("./questionSchema");
const questionModel = mongoose.model("QuestionModel", questionSchema);
module.exports = questionModel;
