const express = require('express')
const app = express()
const port = 5050
const BooksCtrl = require('./controllers/books_controller')

app.use(express.json())

app.get('/api/books', BooksCtrl.read)
app.post('/api/books', BooksCtrl.create)
app.put('/api/books/:id', BooksCtrl.update)
app.delete('/api/books/:id', BooksCtrl.delete)

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})

