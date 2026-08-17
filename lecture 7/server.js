const http = require("http");

const users = [
    { id: 101, name: "Alex", email: "abc@gmail.com" },
    { id: 102, name: "Ravi", email: "ravi@gmail.com" },
    { id: 103, name: "John", email: "john@gmail.com" },
    { id: 104, name: "Basu", email: "basu@gmail.com" },
];

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    } else if (req.url == "/contact" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();
    } else if (req.url == "/users" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } else if (req.url == "/users" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const user = JSON.parse(body);
            users.push(user);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ "success": true, "message": "User Created Successfully" }));
            res.end();
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});