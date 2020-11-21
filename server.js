const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard', {useNewUrlParser: true, useUnifiedTopology: true});



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./controllers/quiz.controller.server.js")(app);
require("./controllers/questions.controller.server.js")(app);



app.get("/api/quizzes", (req, res) => res.send(quizzes));

app.get("/api/quizzes/:qid", (req, res) =>
  res.send(quizzes.find((q) => q._id === req.params["qid"]))
);

app.get("/api/quizzes/:qid/questions", (req, res) =>
  res.send(questions.filter((q) => q.quizId === req.params["qid"]))
);

app.listen(3000);
