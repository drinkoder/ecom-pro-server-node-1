require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const db_url = process.env.DATABASE_URL;

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('connection to db established'));

app.use(express.json());

const auth_api_routes = require('./api-0.0.1/accounts/routes');
app.use('/auth', auth_api_routes);

app.listen(port, () => console.log(`server has started at port ${port}`));
