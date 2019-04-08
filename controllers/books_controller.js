let books = [	
    {"id": 1,
    "author": "cool",
    "title": "book"},

    {"id": 2,
    "author": "average",
    "title": "book"},

    {"id": 3,
    "author": "lame",
    "title": "book"},

    {"id": 4,
    "author": "okay",
    "title": "book"},

    {"id": 5,
    "author": "decent",
    "title": "book"}
];

let id = books.length + 1;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },

    create: (req, res) => {
        console.log(req.body)
        let book = {
            id: id++,
            title: req.body.title,
            author: req.body.author
        }
        books.push(book)
        res.status(200).send(books)
    },

    update: (req, res) => {
        let { id } = req.params
        let update = req.body
        let index = books.findIndex(book => +id === +book.id)
        for (let key in update){
            books[index][key] = update[key]
        }
        res.status(200).send(books)
    },

    delete: (req, res) => {
        let { id } = req.params
        let index = books.findIndex(book => +id === +book.id)
        books.splice(index, 1)
        res.status(200).send(books)
    }
}
