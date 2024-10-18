// Vanilla API - no framework

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World!</h1>");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
