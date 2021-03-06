const quizAttemptModel = require("../models/quiz-attempts/quizAttemptModel.js");

const scoreQuiz = (questions) => {
  let numberOfCorrectQuestions = 0;
  questions.forEach((question) =>
    question.answer === question.correct
      ? numberOfCorrectQuestions++
      : numberOfCorrectQuestions
  );
  return (100 * numberOfCorrectQuestions) / questions.length;
};

const findAttemptsForQuiz = (qzid) =>
  quizAttemptModel.find({ quiz: qzid }).populate("quiz", "title _id");

const createAttempt = (qid, attempt) =>
  quizAttemptModel.create({
    quiz: qid,
    answers: attempt,
    score: scoreQuiz(attempt),
  });

module.exports = { createAttempt, findAttemptsForQuiz };
