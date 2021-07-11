const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'html');
app.set('views', './views')

app.listen(process.env.PORT || 3000, () => console.log("Server connected!"));
console.log();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.get('/introduce', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/introduce.html'))
})

app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/courses.html'))
})

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/news.html'))
})

app.get('/detail-news', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/detail-news.html'))
})