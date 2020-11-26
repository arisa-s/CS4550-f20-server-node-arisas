const quizzesDao = require("../doas/quizzes.dao.server.js");
const findAllQuizzes = () => quizzesDao.findAllQuizzes();
const findQuizById = (qid) => quizzesDao.findQuizById(qid);
module.exports = { findAllQuizzes, findQuizById };
