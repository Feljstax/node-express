const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

//Configures Morgan to use development versin
app.use(morgan('dev'));


//Modify Express to serve files from public folder with middeware
//__dirname is a special variable in Node. It refers to absolute path of current directory of the file it's in
app.use(express.static(__dirname + '/public'));

//setup server so it returns same response for any request
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//Create instance of server and listen to it

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

