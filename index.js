require('./config/connection');

const express = require('express');
const port = (process.env.port || 3000);

// express
const app = express();
app.use(express.json()); // the data must to be in json

// config
app.set('port', port);

// routes
app.use('/api', require('./routes'));

// express init
app.listen(app.get('port'), (error)=>{
    if(error) { console.log(error); }
    else { console.log('init server on port: ' + port); }
});