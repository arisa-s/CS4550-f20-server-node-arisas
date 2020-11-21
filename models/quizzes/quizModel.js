const mongoose = require('mongoose');
const quizSchema = require("./quizSchema")
const quizModel = mongoose.model("QuizModel", quizSchema)

const findAllQuizzes = () =>
quizModel.find()

const findQuizById = (qid) => 
quizModel.findById(qid)

module.exports = {
    findAllQuizzes, findQuizById
}
