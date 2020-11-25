/*let quizzes = require("./quizzes");
let quizModel = require("../models/quizzes/quizModel")


const findAllQuizzes = () => quizModel.findAllQuizzes();
const findQuizById = (qid) => quizModel.findQuizById(qid)
module.exports = {
  findAllQuizzes,
  findQuizById
}*/

const quizzesDao = require('../doas/quizzes.dao.server.js')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }