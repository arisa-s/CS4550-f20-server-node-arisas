let questions = require("./questions");

  const findQuestionsForQuiz = (qid) =>
  questions.filter((q) => q.quizId === qid)

module.exports = {
    findQuestionsForQuiz
}

