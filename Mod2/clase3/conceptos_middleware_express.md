# Conceptos y Términos Clave para Resolver Ejercicios con Middleware en Express.js

Estos son los elementos esenciales que los estudiantes deben conocer y entender para aplicar middlewares de forma correcta y práctica:

## 🔹 Middleware
Función que se ejecuta antes de llegar a la función final que responde al cliente.

Se usa para verificar, transformar, validar o interrumpir una solicitud.

Tiene la forma:

```js
function mid(req, res, next) {
  // lógica
  next(); // para continuar
}
```

## 🔹 app.use()
Método de Express que aplica middleware de forma global.

Se ejecuta para todas las rutas y todos los métodos (GET, POST, etc.).

```js
app.use(miMiddleware);
```

## 🔹 Middleware por ruta
Se aplica directamente a una o varias rutas específicas.

Se coloca como argumento intermedio entre la ruta y la función final.

```js
app.get('/ruta', middleware1, middleware2, (req, res) => {
  res.send('Respuesta');
});
```

## 🔹 next()
Es una función que se debe llamar dentro del middleware para continuar el flujo hacia el siguiente middleware o hacia la ruta final.

Si no se llama, la solicitud “se queda ahí” y no se responde nunca.

## 🔹 req.query
Objeto que contiene los parámetros que vienen después del signo ? en una URL.

Ejemplo:  
URL: `/saludo?nombre=Laura`  
→ `req.query.nombre` devuelve `"Laura"`

## 🔹 res.send()
Método para enviar una respuesta directa al cliente (texto, HTML, etc.).

```js
res.send('Hola');
```

## 🔹 res.redirect()
Método que redirige al usuario a otra URL.

```js
res.redirect('/otra-ruta');
```

## 🔹 req.method
Devuelve el método HTTP usado en la solicitud: `"GET"`, `"POST"`, etc.

## 🔹 req.url
Devuelve la URL completa solicitada por el cliente (sin el dominio).

## 🔹 Estructura de una ruta con middleware

```js
app.get('/ruta', middlewareA, middlewareB, controladorFinal);
```

El flujo es:  
`middlewareA → middlewareB → controladorFinal`

## 🔹 Orden de ejecución
Los middleware se ejecutan en el orden en que se declaran (tanto globales como por ruta).

El primero que no llame a `next()` detiene el flujo.

## 🟡 Buenas prácticas al usar middleware
- Siempre usar `next()` si se quiere continuar.
- No enviar múltiples respuestas (solo una vez `res.send()` o `res.redirect()`).
- Reutilizar middleware en múltiples rutas si es posible.
