

const quizzesService = require('../services/quiz.service.server.js')
module.exports = function (app) {
   app.get('/api/quizzes', (req, res) =>
       quizzesService.findAllQuizzes()
           .then(allQuizzes => res.json(allQuizzes)))
   app.get('/api/quizzes/:qzid', (req, res) =>
       quizzesService.findQuizById(req.params['qzid'])
           .then(quiz => res.json(quiz)))
}

/*
const quizService = require("../services/quiz.service.server.js")
module.exports = (app) => {
  

  const findAllQuizzes = (req, res) => {
    quizService.findAllQuizzes()
  .then(quizzes => res.send(quizzes))
  }
  

  const findQuizById = (req, res) => {
    quizService.findQuizById(req.params['qid'])
    .then(quiz => res.send(quiz))

  }
  


  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:qid", findQuizById);
};
*/

