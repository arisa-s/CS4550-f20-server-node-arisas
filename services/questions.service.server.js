let questions = require("./services/questions.service.server.js");

  const findQuestionsForQuiz = (qid) =>
  questions.filter((q) => q.quizId === qid)

module.exports = {
    findQuestionsForQuiz
}

