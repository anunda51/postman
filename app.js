const express = require("express") //include
const bodyParser = require("body-parser")
const app = express()
const port = 8000
app.use(bodyParser.json()) //middleware

// / = root uri
app.get('/', (req, res) => {
    res.send('Hello AunzSoSmart!.')
})

// todolist method get post
var todoList = [
    {
        id: 1,
        text: "Doing Homework"
    },
    {
        id: 2,
        text: "Drinking Water"
    }
]

var idCounter = todoList.length

app.get('/todo',(req, res) => {
    res.json(todoList)
})

app.get('/todo/:id',(req, res) => {
    var id = req.params.id
    var todo = todoList.filter(todo => todo.id == id)
    res.json(todo)
})

app.post('/todo',(req, res) => {
    idCounter += 1
    todoList.push({
        id: idCounter,
        text: req.body.text
    })
    res.sendStatus(200)
})

app.listen(port, () => (console.log("App listening on port " + port)))