const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
    if(req.url=== '/api/recomendados' && req.method === 'GET'){
        const videosRecomendados =[
            {id: '1', titulo: 'Cómo ser un buen programador con Node.Js', canal: 'DevMaster'},
            {id: '2', titulo: 'Node.js para expertos', canal: 'DevSeniorCode'},
            {id: '3', titulo: 'Entrevista cn el CEO de Google', canal: 'Tech talks'}
        ];
        const jsonData = JSON.stringify(videosRecomendados);
        res.writeHead(200, {
            'Content-type': 'application/json',
            'Content-Length': Buffer.byteLength(jsonData)
        });
        res.end(jsonData);
    }else{
        const filePath = path.join(__dirname, 'public', '404.html');
        fs.readFile(filePath, (err, content)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error interno del servidor');
            }
            else{
                res.writeHead(404, {'Content-type': 'text/html'});
                res.end(content);
            }
        });

    }
});

server.listen(3000, ()=>{
    console.log("Servidor escuchando en http://localhost:3000");
    console.log("Visita http://localhost:3000/api/recomendados para ver los videos");
});