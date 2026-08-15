const http = require("http");
const server = http.createServer((req, res) => {
    //console.log(req.url);
    //console.log(req.headers);
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();

    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    } else if (req.url == "/contact" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
    }

})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});