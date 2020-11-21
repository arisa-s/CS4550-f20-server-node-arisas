/*const mongoose = require("mongoose");

const questionSchema = require("../questions/questionSchema");

const quizAttemptSchema = mongoose.Schema(
  {
    score: Number,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    answers: [questionSchema],
  },
  { collection: "attempts" }
);
module.exports = quizAttemptSchema;
*/