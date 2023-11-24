const express = require('express')
const app = express()
const port = 3000
//маршрут стартовой страницы
// app.get('/', (req, res) =>{
//     res.send("Hello World")
// })
//получение данных с сервера
app.get('/users', (req, res) =>{
    res.send("Список пользователей")
})
//отправка данных на сервер
app.post('/users', (req, res) =>{
    res.send("Пользователь создан")
})
//изменение (обновление) данных на сервере
app.put('/users/:id', (req, res) =>{
    res.send(`пользователь с ID ${req.params.id} обновлен`)
})
//удаление данных на сервере
app.delete('/users/:id', (req, res) =>{
    res.send(`пользователь с ID ${req.params.id} удален`)
})

//прослушивание порта
app.listen(port, () =>{
    console.log(`server starting on port ${port}`)
})