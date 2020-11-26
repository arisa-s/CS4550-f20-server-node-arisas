const questionModel = require("../models/questions/questionModel");
const quizzModel = require("../models/quizzes/quizModel.js");

const findAllQuestions = () => questionModel.find();
const findQuestionById = (qid) => questionModel.findById(qid);
const findQuestionsForQuiz = (qzid) =>
  quizzModel
    .findById(qzid)
    .populate("questions")
    .then((quiz) => quiz.questions);
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };
