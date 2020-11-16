let quizzes = require("./quizzes");

const findAllQuizzes = () => quizzes;
const findQuizById = (qid) => quizzes.find((q) => q._id === qid);

module.exports = {
  findAllQuizzes,
  findQuizById
}