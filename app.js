const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, './public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {
        message: 'Hello Express',
        time: new Date().getTime()
    });
});


const port = process.env.HTTP_PORT || 3000;
const host = process.env.HTTP_IP || '0.0.0.0';

app.listen(port, host, () => console.log(`express app started at http://${host}:${port}`));



