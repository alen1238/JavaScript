# Ejercicios Nivel Básico: Middleware en Express.js

Estos ejercicios están diseñados para introducir el concepto de middleware en Express.js. Se recomienda que el estudiante escriba el código a mano para comprender mejor cada parte del flujo.

---

## 🟢 EJERCICIO 1 – Registro de solicitudes

### Enunciado

Crea un middleware que registre en consola el método y la URL de cada solicitud que llega al servidor. Aplícalo a nivel global y luego responde a una ruta que diga “Hola desde el servidor”.


Archivo: `servidor.js`

```js
const express = require('express');
const app = express();

// Paso 1: Crea un middleware que imprima el método y la URL
function registrarPeticion(req, res, next) {
  // ¿Qué propiedad de req representa el método HTTP? (Ej. GET, POST, etc.)
  // ¿Qué propiedad representa la URL solicitada?
  console.log(`Solicitud: ${req.method} ${req.url}`);
  next(); // ¿Qué ocurre si no se llama a next()?
}

// Paso 2: Aplica el middleware globalmente
app.use(registrarPeticion);

// Paso 3: Define una ruta simple
app.get('/saludo', (req, res) => {
  res.send('Hola desde el servidor');
});

// Paso 4: Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
```

### ✅ Prueba

Abre el navegador y visita `http://localhost:3000/saludo`.  
→ En la consola deberías ver: `"Solicitud: GET /saludo"`

### 🟡 Preguntas de reflexión

- ¿Este middleware funciona con todas las rutas o solo con /saludo?
- ¿Qué pasaría si lo quito?


---

## 🟢 EJERCICIO 2 – Verificar parámetro en la URL

### Enunciado

Crea un middleware global que verifique si la URL contiene un parámetro llamado `nombre` (ej: `/bienvenida?nombre=Laura`).  
Si no lo encuentra, debe devolver un mensaje de error.  
Si lo encuentra, debe permitir el paso a la ruta y mostrar un saludo personalizado usando ese nombre.


Archivo: `servidor.js`

```js
const express = require('express');
const app = express();

// Paso 1: Middleware para verificar parámetro "nombre" en la URL
function verificarNombreEnQuery(req, res, next) {
  // Los parámetros tipo ?nombre=valor están en req.query
  const nombre = req.query.nombre;

  // ¿Qué hacer si no se envió ningún nombre en la URL?
  if (!nombre) {
    return res.send('❌ Debes indicar tu nombre en la URL. Ejemplo: /bienvenida?nombre=Laura');
  }

  // ¿Qué podríamos hacer con el nombre? ¿Guardarlo? ¿Usarlo luego?
  console.log(`👋 Nombre recibido: ${nombre}`);
  next();
}

// Paso 2: Aplica el middleware globalmente
app.use(verificarNombreEnQuery);

// Paso 3: Ruta principal
app.get('/bienvenida', (req, res) => {
  const nombre = req.query.nombre;
  res.send(`¡Bienvenida/o, ${nombre}!`);
});

// Paso 4: Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

### ✅ Pruebas

- Accede a `http://localhost:3000/bienvenida`  
→ Recibirás el mensaje de error.

- Accede a `http://localhost:3000/bienvenida?nombre=Laura`  
→ Verás `🎉 ¡Bienvenida/o, Laura!` en pantalla y el nombre en la consola.

### 🟡 Preguntas de reflexión

- ¿Qué parte del objeto `req` se usa para acceder a los datos enviados por la URL?
- ¿El middleware verifica solo para /bienvenida o para cualquier ruta?
---

# Ejercicios Nivel Básico: Middleware por Ruta en Express.js

Estos ejercicios están diseñados para que el estudiante practique middlewares aplicados únicamente a rutas específicas, permitiendo entender cómo controlar el acceso, validar condiciones o aplicar lógica sin afectar todo el servidor.

---

## 🟢 EJERCICIO 3 – Verificación de clave en la ruta protegida

### Enunciado

Crea una ruta `/protegida` que solo responda si en la URL se incluye un parámetro `clave=1234`.  
Si la clave no está o es incorrecta, el middleware debe impedir el acceso y mostrar un mensaje de error.

Esta verificación debe hacerse usando un middleware aplicado solo a esta ruta, no globalmente.


Archivo: `servidor.js`

```js
const express = require('express');
const app = express();

// Middleware específico para la ruta /protegida
function verificarClave(req, res, next) {
  const clave = req.query.clave;

  // ¿Qué condición debe cumplirse para continuar?
  if (clave === '1234') {
    next();
  } else {
    res.send('❌ Acceso denegado. Clave incorrecta o no enviada.');
  }
}

// Ruta protegida que usa el middleware
app.get('/protegida', verificarClave, (req, res) => {
  res.send('🔐 Has accedido a la zona protegida.');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
```

### ✅ Prueba

- Visita: `http://localhost:3000/protegida` → debería fallar.
- Visita: `http://localhost:3000/protegida?clave=1234` → debería funcionar.

### 🟡 Preguntas

- ¿Qué sucede si colocas `app.use(verificarClave)`? ¿Afectaría a otras rutas?
- ¿Qué pasaría si pones múltiples middlewares en una misma ruta?

---

## 🟢 EJERCICIO 4 – Validar longitud de nombre en una ruta

### Enunciado

Crea una ruta `/usuario` que reciba un nombre por la URL (ej: `/usuario?nombre=Ana`)  
Crea un middleware solo para esa ruta que verifique que el nombre tenga al menos 4 caracteres.  
Si no cumple, mostrar un mensaje de advertencia.


Archivo: `servidor.js`

```js
const express = require('express');
const app = express();

// Middleware para validar longitud del nombre
function validarNombre(req, res, next) {
  const nombre = req.query.nombre;

  // ¿Qué condición debe verificarse aquí?
  if (!nombre || nombre.length < 4) {
    return res.send('⚠️ El nombre debe tener al menos 4 letras. Ej: /usuario?nombre=Laura');
  }

  next();
}

// Ruta que usa el middleware
app.get('/usuario', validarNombre, (req, res) => {
  const nombre = req.query.nombre;
  res.send(`👋 ¡Hola, ${nombre}!`);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
```

### ✅ Prueba

- Visita: `http://localhost:3000/usuario?nombre=Ana` → debería fallar.
- Visita: `http://localhost:3000/usuario?nombre=Laura` → debería mostrar el saludo.

### 🟡 Preguntas

- ¿Podrías reusar este middleware en otra ruta como `/registro`?
- ¿Qué pasa si aplicas el mismo middleware varias veces?

---
# Ejercicio Intermedio: Middleware con Redirección en Express.js

Este ejercicio introduce la redirección desde middlewares en lugar de enviar mensajes directamente. Permite ver cómo un middleware puede desviar al usuario a otra ruta dependiendo de ciertas condiciones.

---

## 🟢 EJERCICIO 5 – Redirección según edad y clave

###  Enunciado

Crea una ruta `/zona-segura` que esté protegida por dos middlewares aplicados por ruta:

1. El primer middleware debe verificar si se ha enviado la edad (ej: `/zona-segura?edad=17`).  
   - Si no se envía, debe redirigir a `/sin-edad`.  
   - Si la edad es menor a 18, redirigir a `/solo-adultos`.  

2. El segundo middleware debe verificar que se envíe la clave correcta (ej: `clave=secreta`).  
   - Si no está o es incorrecta, redirigir a `/clave-incorrecta`.

Si ambas validaciones se superan, se muestra el contenido protegido.

Además, define las rutas a las que se redirige con mensajes informativos.

---


### Esquema inicial del servidor

Archivo: `servidor.js`

```js
const express = require('express');
const app = express();

// Middleware 1: Verifica edad
function verificarEdad(req, res, next) {
  const edad = parseInt(req.query.edad);

  if (!edad) {
    return res.redirect('/sin-edad');
  }

  if (edad < 18) {
    return res.redirect('/solo-adultos');
  }

  next();
}

// Middleware 2: Verifica clave
function verificarClave(req, res, next) {
  const clave = req.query.clave;

  if (clave !== 'secreta') {
    return res.redirect('/clave-incorrecta');
  }

  next();
}

// Ruta protegida con ambos middlewares
app.get('/zona-segura', verificarEdad, verificarClave, (req, res) => {
  res.send('✅ Bienvenido a la zona segura.');
});

// Rutas a las que se redirige
app.get('/sin-edad', (req, res) => {
  res.send('⚠️ Debes indicar tu edad. Ejemplo: /zona-segura?edad=20&clave=secreta');
});

app.get('/solo-adultos', (req, res) => {
  res.send('🚫 Solo para mayores de edad.');
});

app.get('/clave-incorrecta', (req, res) => {
  res.send('🔒 Clave incorrecta. Acceso denegado.');
});

// Inicia servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

---

### ✅ Pruebas

- Accede a `/zona-segura` → redirige a `/sin-edad`.
- Accede a `/zona-segura?edad=16` → redirige a `/solo-adultos`.
- Accede a `/zona-segura?edad=20&clave=otra` → redirige a `/clave-incorrecta`.
- Accede a `/zona-segura?edad=20&clave=secreta` → accede correctamente.

---

### 🟡 Preguntas

- ¿En qué orden se ejecutan los middlewares?
- ¿Qué pasa si inviertes el orden de los middleware en la ruta?
- ¿Qué ocurre si uno de ellos no llama a `next()`?

---

¡Este patrón es muy común para proteger rutas sensibles como paneles de administración o formularios especiales!
