const mongoose = require("mongoose");
const quizSchema = require("./quizSchema");
const quizModel = mongoose.model("QuizModel", quizSchema);
module.exports = quizModel;
