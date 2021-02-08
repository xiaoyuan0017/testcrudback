const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./router/index');


// let baseURL = 'https://';
let baseURL = 'localhost';


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));


app.use('/', indexRouter);

// listen on port
const port = process.env.PORT || 8012;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});  
