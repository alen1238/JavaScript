
# Introducción a Express.js para crear servidores web

## ¿Por qué nació Express.js?

Express fue creado como una **abstracción sobre el módulo `http` de Node.js**, con el objetivo de:

| Problema con Node.js puro                      | Solución con Express               |
|------------------------------------------------|------------------------------------|
| El código se vuelve largo y repetitivo         | Enrutamiento elegante              |
| No hay manejo fácil de JSON                    | `res.json()` lo hace por ti        |
| Difícil manejar errores                        | Middleware centralizado de errores |
| No hay middlewares                             | Puedes encadenar middlewares       |
| Servir archivos estáticos requiere mucho código| `express.static()` en una línea    |

**Express es como usar una bicicleta eléctrica en vez de una normal cuesta arriba**  
Con Node.js puro puedes llegar, pero lo harás más lento, con más esfuerzo y más errores.  
Express te da una estructura clara, te ahorra tiempo, y permite que tu código sea legible, escalable y mantenible.

## ¿Qué agrega Express?

| Función                  | Descripción breve                                       |
|--------------------------|----------------------------------------------------------|
| `app.get()` / `app.post()` | Manejo fácil de rutas y métodos HTTP                    |
| `req.body`, `req.params` | Datos del cuerpo de la petición y de la URL             |
| `res.json()`             | Enviar JSON de forma simple                             |
| Middlewares              | Reutilizar funciones en múltiples rutas                 |
| `express.static()`       | Servir archivos como imágenes o HTML                    |
| Manejo de errores        | Un único lugar para capturar errores                    |

## Instalación

```bash
npm init -y
npm install express
```

### 2. Ejemplo básico (Hola mundo)

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo con Express!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```


##  Ejercicios prácticos

### Ejercicio 1: Hola mundo

- Crear un servidor con Express que responda "Hola desde Express" en la ruta `/`.

### Ejercicio 2: Usar parámetros en la URL

- Ruta GET `/usuario/:id`
- Devuelve un JSON con el mensaje: `Usuario con id: ...`

### Ejercicio 3: Recibir datos con POST

- Ruta POST `/registro`
- Recibe `nombre` y `edad` en el body (formato JSON)
- Responde con un mensaje de éxito y los datos recibidos

### Ejercicio 4: Query params

- Ruta GET `/filtro?categoria=drama`
- Responde con un JSON que incluya la categoría solicitada

---

✍️ **Todos estos ejercicios son la base de servidores reales que se usan en la industria**, como los que permiten buscar videos en YouTube, enviar formularios o consultar usuarios.

