const express = require('express');
var cors = require('cors');
const todo = require('./data');

// const http = require('http');
// const requestHandler = require('./request');

// module.exports = ({port, cb}) => {
//     const server = http.createServer(requestHandler);
//     server.listen(port, cb);
// }

const app = express();
app.use(express.json());
app.use(cors());

app.get('/todos', (req, res) => {
    res.send({todos : todo.todos})
})

app.post('/todo/store', (req, res) => {
    const {task} = req.body;
    if(task){
        new_task = {
            id: todo.todos[todo.todos.length - 1].id + 1,
            task: task,
            completed: false
        }
        todo.todos.push(new_task);
    }
    res.send({task: new_task})
})

app.put('/todo/update/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const index = todo.todos.findIndex(item => item.id === parseInt(todoId));
    const new_todo = todo.todos.filter(item => item.id === parseInt(todoId));
    const task_update = {
        ...new_todo[0],
        completed : new_todo[0].completed === false ? true : false,
    }
    todo.todos[index] = task_update;
    res.send({task: task_update})
})

app.delete('/todo/delete/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const index = todo.todos.findIndex(item => item.id === parseInt(todoId));
    if(todoId){
        todo.todos.splice(index, 1);
    }
    res.send({todos: todo.todos})
})

app.listen(3001, () => console.log('server is running on port 3001'));