const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("companies.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port, function() {
    console.log("Running")
});