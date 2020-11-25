const mongoose = require('mongoose');
const questionSchema = require("./questionSchema")
const questionModel = mongoose.model("QuestionModel", questionSchema)
/*
const findQuestionsForQuiz = (qid) =>
questionModel.find({quizId: qid});

module.exports = {
    findQuestionsForQuiz
}
*/
module.exports = questionModel
