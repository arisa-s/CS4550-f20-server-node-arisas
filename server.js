const express = require("express");
const app = express();

require("./controllers/quiz.controller.server.js")(app);

require("./controllers/questions.controller.server.js")(app);

app.get("/api/quizzes", (req, res) => res.send(quizzes));

app.get("/api/quizzes/:qid", (req, res) =>
  res.send(quizzes.find((q) => q._id === req.params["qid"]))
);

app.get("/api/quizzes/:qid/questions", (req, res) =>
  res.send(questions.filter((q) => q.quizId === req.params["qid"]))
);

app.listen(1000);
