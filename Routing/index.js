const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./data-on/data.json', 'utf-8');
const dataObj = JSON.parse(data);

//You must store the data.json file in a subfolder for it to work.

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
    res.end("This is the OVERVIEW page.")}
    else if (pathName === '/product') {
    res.end("You're now in the PRODUCT page")}
    else if(pathName === '/api') {
        res.writeHead(200, {'Content-type' : 'application/json'});
         res.end(data);
    } 
    else {
        res.writeHead(404, {'Content-tyep': 'text/html'});
        res.end("<h1>Hoops... Page not found.</h1>");
    }
});


server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000...")
});
