const questionsDao = require("../doas/questions.dao.server.js");
const findAllQuestions = () => questionsDao.findAllQuestions();
const findQuestionById = (qid) => questionsDao.findQuestionById(qid);
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid);
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };
