const quizAttemptDao = require('../doas/quiz-attempt.dao.server.js')
module.exports = (app) => {
   app.post('/api/quizzes/:qid/attempts', (req, res) =>
       quizAttemptDao.createAttempt( req.params.qid, req.body)
           .then(attempt => res.send(attempt)))
   app.get('/api/quizzes/:qid/attempts', (req, res) =>
       quizAttemptDao.findAttemptsForQuiz(req.params.qid)
           .then(attempts => res.send(attempts)))
}
