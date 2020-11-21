const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: String,
    questionsId: String,
    question: String,
    answer: String,
    type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
    choice: [String]
  }, {collection: "questions"})

  module.exports = questionSchema
