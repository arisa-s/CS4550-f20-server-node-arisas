const mongoose = require("mongoose");
const quizAttemptSchema = require("./quizAttemptSchema.js");
const quizAttemptModel = mongoose.model("QuizAttemptModel", quizAttemptSchema);
module.exports = quizAttemptModel;
