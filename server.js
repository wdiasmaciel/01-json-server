const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db/db.json'); // Seu arquivo db.json (arquivo que armazena os dados da aplicação).
const middlewares = jsonServer.defaults();

server.use(cors()); // Habilita CORS (Cross-Origin Resource Sharing).
server.use(middlewares);
server.use(router);

server.listen(3333, () => {
  console.log('JSON Server is running!');
});
