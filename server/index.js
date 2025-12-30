require('dotenv').config();
const express = require('express');
const cors=require('cors');
const route = require('./router/route');
require('./config/db')

const server = express();

server.use(express.json());
server.use(route);
server.use(cors);

const PORT = process.env.PORT||3000

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



