const express = require("express")
const app = express()

let quizzes = [
    {
        _id: "123",
        title: "Q1"
    },
    {
        _id: "234",
        title: "Q2"
    },
    {
        _id: "456",
        title: "Q3"
    },
    {
        _id: "567",
        title: "Q4"
    }
]

let questions = [
    
]

app.get("/api/quizzes", (req,res) =>
res.send(quizzes)) 

app.get("/api/quizzes/:qid", (req, res) =>
res.send(quizzes.find(q => q._id === req.params['qid'])))

app.get("/api/quizzes/:qid/questions", (req, res) =>
res.send(questions.filter(q => q.quizId === res.params['qid'])))
app.listen(1000)
