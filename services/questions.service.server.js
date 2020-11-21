let questions = require("./questions");
const questionModel = require("../models/questions/questionModel")


const findQuestionsForQuiz = (qid) =>
questionModel.findQuestionsForQuiz(qid)


module.exports = {
    findQuestionsForQuiz
}

