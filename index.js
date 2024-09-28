const http = require('http');
// create an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    //Routing based on the Url
    if(req.url === '/home'){
        res.statusCode = 200;
        res.end('Welcome home');
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('welcome to About us Page');
    }else if(req.url === './node'){
        res.statusCode = 200;
        res.end('Welcome to my Node js Project');
    }else{
        //Default response for undefined routes
        res.statusCode = 404;
        res.end('Page not found');
    }
});

//Listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on port 4000')
});
//Open your browser and go to the following URLs:
//http://localhost:4000/home
//http://localhost:4000/about
//http://localhost:4000/node
//http://localhost:4000/unknown