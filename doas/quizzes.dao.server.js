const quizzeModel = require("../models/quizzes/quizModel.js");
const findAllQuizzes = () => quizzeModel.find();
const findQuizById = (quizId) => quizzeModel.findById(quizId);
module.exports = { findAllQuizzes, findQuizById };
