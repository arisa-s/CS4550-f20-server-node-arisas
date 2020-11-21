const questionService = require("../services/questions.service.server.js")

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) =>
  questionService.findQuestionsForQuiz(req.params["qid"])
  .then(questions => res.send(questions))


  app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
};
