const http = require('http');

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
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('Ruta no encontrada');
    }
});

server.listen(3000, ()=>{
    console.log("Servidor escuchando en http://localhost:3000");
    console.log("Visita http://localhost:3000/api/recomendados para ver los videos");
});