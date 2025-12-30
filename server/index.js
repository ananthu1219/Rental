require('dotenv').config();
const express = require('express');
const route = require('./router/route');

const server = express();

server.use(express.json());
server.use(route);

const PORT = process.env.PORT||3000

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



