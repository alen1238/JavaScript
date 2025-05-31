
//importamos el módulo 'http' nativo de node
const http = require('http');

//definimos el puerto en el que el servidor estará escuchando las peticiones
const PUERTO = 3000;

const servidor = http.createServer((req, res)=>{
    if(req.method ==='GET'){
       
        if(req.url === '/'){
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Respuesta desde servidor para GET en ruta principal');
        }
        else if(req.url ==='/detalles'){
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Observa los detalles del request y response en la consola');
            console.log('Detalles del request:');
            console.log('Método: ', req.method);
            console.log('URL: ', req.url);
            console.log('Cabeceras: ', req.headers);

            console.log('Detalles del response:');
            console.log('Estado: ', res.statusCode);
            console.log('Cabeceras: ', res.getHeaders());
        }
        else{
            res.writeHead(404, {'content-type': 'text/plain'});
            res.end('Ruta no encontrada');
        }
    }
    else{
        res.writeHead(405, {'content-type': 'text/plain'});
        res.end('Método no permitido');
    }
});

servidor.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});