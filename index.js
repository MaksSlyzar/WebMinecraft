var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile('public/index.html')
});

app.listen(3000, () => {console.log('Server started')});