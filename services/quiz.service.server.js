let quizzes = require("./quizzes");
let quizModel = require("../models/quizzes/quizModel")


const findAllQuizzes = () => quizModel.findAllQuizzes();
const findQuizById = (qid) => quizModel.findQuizById(qid)
module.exports = {
  findAllQuizzes,
  findQuizById
}