const express = require("express");
const app = express();
const PORT = 3000;

const logMiddleware = (req, res, next) => {
    req.name = "John Doe";
    console.log("Request url:", req.url, "req method:", req.method);
  next();
}

app.use(logMiddleware);

app.get("/", (req, res) => {
    console.log("Request name:", req.name);
    console.log("Hello World");
    res.send("Hello World");
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});