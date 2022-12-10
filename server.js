const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

//setup server so it returns same response for any request

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.header('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//Create instance of server and listen to it

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

