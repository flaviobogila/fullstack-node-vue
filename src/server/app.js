const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const accountRoutes = require('./routes/api/account');
app.use('/api/account', accountRoutes);

if(process.env.NODE_ENV === 'production'){
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

app.listen(3030, () => {
    console.log("Server started on port 3030");
})

module.exports = app;
