const questionService = require("../services/questions.service.server.js")

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) =>
  res.send(questionService.findQuestionsForQuiz(req.params["qid"]))


  app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
};
