const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Este servidor responde lo mismo a cualquier ruta.\n');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
