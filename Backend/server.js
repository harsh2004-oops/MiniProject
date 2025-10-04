const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

app.get('/', (req, res) => {
    res.json("hello this is backend")
});

app.get('/books', (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend!")
})
