- [🌟 Ejemplo Guía: ¡Un saludo personalizado!](#-ejemplo-guía-un-saludo-personalizado)
  - [✏️ Ejercicio 1: ¡Despide con estilo! (Nivel básico)](#️-ejercicio-1-despide-con-estilo-nivel-básico)
  - [✏️ Ejercicio 2: ¡Descuentos para todos! (Nivel medio)](#️-ejercicio-2-descuentos-para-todos-nivel-medio)
  - [✏️ Ejercicio 3: ¡Correos que enamoran! (Nivel intermedio)](#️-ejercicio-3-correos-que-enamoran-nivel-intermedio)
  - [✏️ Ejercicio 4: ¡Número mágico! (Nivel avanzado)](#️-ejercicio-4-número-mágico-nivel-avanzado)
- [🔥 ¡Funciones anónimas en acción!](#-funciones-anónimas-en-acción)
  - [¿Qué son las funciones anónimas?](#qué-son-las-funciones-anónimas)
- [✨ ¿Cómo transformar nuestros ejercicios anteriores con funciones anónimas?](#-cómo-transformar-nuestros-ejercicios-anteriores-con-funciones-anónimas)
  - [✏️ Ejercicio 1: ¡Despide con estilo! (con función anónima)](#️-ejercicio-1-despide-con-estilo-con-función-anónima)
  - [✏️ Ejercicio 2: ¡Descuentos para todos! (con función anónima)](#️-ejercicio-2-descuentos-para-todos-con-función-anónima)
  - [✏️ Ejercicio 3: ¡Correos que enamoran! (con función anónima)](#️-ejercicio-3-correos-que-enamoran-con-función-anónima)
  - [✏️ Ejercicio 4: ¡Número mágico! (con función anónima)](#️-ejercicio-4-número-mágico-con-función-anónima)
- [🎯 Nuevos ejercicios para practicar funciones anónimas](#-nuevos-ejercicios-para-practicar-funciones-anónimas)
  - [🌟 Ejercicio A: ¡Multiplica rápido!](#-ejercicio-a-multiplica-rápido)
  - [🌟 Ejercicio B: ¡Saludos formales!](#-ejercicio-b-saludos-formales)
  - [🌟 Ejercicio C: ¡Revisa si es mayor de edad!](#-ejercicio-c-revisa-si-es-mayor-de-edad)
  - [🌟 Ejercicio D: ¡Elige tu bebida!](#-ejercicio-d-elige-tu-bebida)
- [⚡ ¡Funciones Lambda (Arrow Functions) al Rescate!](#-funciones-lambda-arrow-functions-al-rescate)
  - [¿Qué son las funciones lambda (arrow functions)?](#qué-son-las-funciones-lambda-arrow-functions)
- [🎯 Ejemplo práctico con función lambda:](#-ejemplo-práctico-con-función-lambda)
- [🛠️ ¿Cómo transformar nuestros ejercicios anteriores a funciones lambda?](#️-cómo-transformar-nuestros-ejercicios-anteriores-a-funciones-lambda)
  - [✏️ Ejercicio 1: ¡Despide con estilo! (con lambda)](#️-ejercicio-1-despide-con-estilo-con-lambda)
  - [✏️ Ejercicio 2: ¡Descuentos para todos! (con lambda)](#️-ejercicio-2-descuentos-para-todos-con-lambda)
  - [✏️ Ejercicio 3: ¡Correos que enamoran! (con lambda)](#️-ejercicio-3-correos-que-enamoran-con-lambda)
  - [✏️ Ejercicio 4: ¡Número mágico! (con lambda)](#️-ejercicio-4-número-mágico-con-lambda)
- [⚡ Ejercicios de Funciones Lambda (Arrow Functions)](#-ejercicios-de-funciones-lambda-arrow-functions)
- [🟢 Nivel 1: Básico — ¡Misiones de Superhéroes!](#-nivel-1-básico--misiones-de-superhéroes)
    - [Ejercicio 1: ¡Saluda como un héroe!](#ejercicio-1-saluda-como-un-héroe)
- [🟡 Nivel 2: Intermedio — ¡Sistema de Batallas RPG!](#-nivel-2-intermedio--sistema-de-batallas-rpg)
    - [Ejercicio 2: ¡Calcula el daño!](#ejercicio-2-calcula-el-daño)
- [🟠 Nivel 3: Avanzado — ¡Clasificación en Hogwarts!](#-nivel-3-avanzado--clasificación-en-hogwarts)
    - [Ejercicio 3: ¡Sombrero seleccionador!](#ejercicio-3-sombrero-seleccionador)
- [🔴 Nivel 4: Experto — ¡Inventario de Aventureros!](#-nivel-4-experto--inventario-de-aventureros)
    - [Ejercicio 4: ¡Duplica tus objetos mágicos!](#ejercicio-4-duplica-tus-objetos-mágicos)
- [¡Conquista el mundo de JavaScript con funciones lambda!](#conquista-el-mundo-de-javascript-con-funciones-lambda)



# 🌟 Ejemplo Guía: ¡Un saludo personalizado!

En programación es muy útil hacer funciones que reciban **otras funciones** para personalizar su comportamiento.  
Mira este ejemplo sencillo:

```javascript
function procesarEntrada(usuario, funcionCallback) {
    return funcionCallback(usuario);
}

function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(procesarEntrada("Alfonso", saludar));
// Debería imprimir: "Hola, Alfonso"
```

**¿Qué pasó aquí?**  
- `procesarEntrada` recibe un nombre y una función que sabe qué hacer con ese nombre.
- `saludar` simplemente construye un saludo personalizado.
- Luego, `console.log` muestra el resultado.

Ahora es tu turno de practicar:

---

## ✏️ Ejercicio 1: ¡Despide con estilo! (Nivel básico)

Crea una función llamada `procesarSalida` que reciba un nombre y una función de callback.

La función callback debe construir un mensaje de despedida como: `"Adiós, [nombre]"`.

**Ejemplo esperado:**

```javascript
console.log(procesarSalida("María", despedir));
// Debería imprimir: "Adiós, María"
```

---

## ✏️ Ejercicio 2: ¡Descuentos para todos! (Nivel medio)

Crea una función `calcularPrecioFinal` que reciba el precio base de un producto y una función de callback.

El callback debe aplicar un **descuento del 20%** y retornar el precio final.

**Ejemplo esperado:**

```javascript
console.log(calcularPrecioFinal(100, aplicarDescuento));
// Debería imprimir: 80
```

---

## ✏️ Ejercicio 3: ¡Correos que enamoran! (Nivel intermedio)

Crea una función `generarCorreo` que reciba un nombre de usuario y una función de callback.

El callback debe devolver un mensaje como: `"Estimado/a [usuario], su pedido ha sido recibido."`

**Ejemplo esperado:**

```javascript
console.log(generarCorreo("Carlos", crearMensajeCorreo));
// Debería imprimir: "Estimado/a Carlos, su pedido ha sido recibido."
```

---

## ✏️ Ejercicio 4: ¡Número mágico! (Nivel avanzado)

Crea una función `evaluarNumero` que reciba un número y una función de callback.

El callback debe devolver:
- `"El número [número] es par"` si el número es par,
- `"El número [número] es impar"` si es impar.

**Ejemplo esperado:**

```javascript
console.log(evaluarNumero(7, verificarParImpar));
// Debería imprimir: "El número 7 es impar"
```

# 🔥 ¡Funciones anónimas en acción!

## ¿Qué son las funciones anónimas?

Las **funciones anónimas** son aquellas que **no tienen nombre**.  
Son muy útiles cuando:
- Solo las vamos a usar **una vez**.
- No queremos ocupar memoria nombrándolas.
- Queremos escribir el código de forma **más rápida y directa**.

En JavaScript puedes pasar una función anónima directamente donde se espera un **callback**.  
¡Mira este ejemplo!

```javascript
console.log(procesarEntrada("Alfonso", function(nombre) {
    return "¡Bienvenido, " + nombre + "!";
}));
```

➡️ No creamos una función `saludar`, simplemente la escribimos **en el momento**.

---

# ✨ ¿Cómo transformar nuestros ejercicios anteriores con funciones anónimas?

Aquí tienes la forma de convertir cada uno:

---

## ✏️ Ejercicio 1: ¡Despide con estilo! (con función anónima)

Antes (con función nombrada):

```javascript
function despedir(nombre) {
    return "Adiós, " + nombre;
}

console.log(procesarSalida("María", despedir));
```

Ahora (con función anónima):

```javascript
console.log(procesarSalida("María", function(nombre) {
    return "Adiós, " + nombre;
}));
```

---

## ✏️ Ejercicio 2: ¡Descuentos para todos! (con función anónima)

Antes:

```javascript
function aplicarDescuento(precio) {
    return precio * 0.8;
}

console.log(calcularPrecioFinal(100, aplicarDescuento));
```

Ahora:

```javascript
console.log(calcularPrecioFinal(100, function(precio) {
    return precio * 0.8;
}));
```

---

## ✏️ Ejercicio 3: ¡Correos que enamoran! (con función anónima)

Antes:

```javascript
function crearMensajeCorreo(nombre) {
    return "Estimado/a " + nombre + ", su pedido ha sido recibido.";
}

console.log(generarCorreo("Carlos", crearMensajeCorreo));
```

Ahora:

```javascript
console.log(generarCorreo("Carlos", function(nombre) {
    return "Estimado/a " + nombre + ", su pedido ha sido recibido.";
}));
```

---

## ✏️ Ejercicio 4: ¡Número mágico! (con función anónima)

Antes:

```javascript
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }
}

console.log(evaluarNumero(7, verificarParImpar));
```

Ahora:

```javascript
console.log(evaluarNumero(7, function(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }
}));
```

---

# 🎯 Nuevos ejercicios para practicar funciones anónimas

Ahora crea soluciones usando funciones anónimas directamente en el `console.log`.

---

## 🌟 Ejercicio A: ¡Multiplica rápido!

Crea una función `procesarMultiplicacion` que reciba dos números y un callback.

El callback debe devolver el resultado de multiplicarlos.

**Ejemplo esperado:**

```javascript
console.log(procesarMultiplicacion(3, 4, function(a, b) {
    return a * b;
}));
// Debería imprimir: 12
```

---

## 🌟 Ejercicio B: ¡Saludos formales!

Crea una función `crearSaludoFormal` que reciba un nombre y un callback.

El callback debe devolver: `"Muy buenas tardes, [nombre]."`

**Ejemplo esperado:**

```javascript
console.log(crearSaludoFormal("Daniela", function(nombre) {
    return "Muy buenas tardes, " + nombre + ".";
}));
// Debería imprimir: "Muy buenas tardes, Daniela."
```

---

## 🌟 Ejercicio C: ¡Revisa si es mayor de edad!

Crea una función `verificarEdad` que reciba una edad y un callback.

El callback debe devolver:
- `"Es mayor de edad"` si es 18 o más,
- `"Es menor de edad"` si es menos.

**Ejemplo esperado:**

```javascript
console.log(verificarEdad(17, function(edad) {
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}));
// Debería imprimir: "Es menor de edad"
```

---

## 🌟 Ejercicio D: ¡Elige tu bebida!

Crea una función `seleccionarBebida` que reciba una hora (0 a 23) y un callback.

El callback debe devolver:
- `"Café"` si es antes de las 12,
- `"Té"` si es después.

**Ejemplo esperado:**

```javascript
console.log(seleccionarBebida(10, function(hora) {
    return hora < 12 ? "Café" : "Té";
}));
// Debería imprimir: "Café"
```
---
# ⚡ ¡Funciones Lambda (Arrow Functions) al Rescate!

## ¿Qué son las funciones lambda (arrow functions)?

Las **funciones lambda**, conocidas en JavaScript como **arrow functions**, son una forma **más corta y moderna** de escribir funciones.

Sirven para:
- **Simplificar** el código.
- **Hacerlo más legible** cuando la función es sencilla.
- **Reducir errores** por olvidarse de `function`, `{}`, `return`, etc.

✅ Su sintaxis básica es:

```javascript
const saludar = (nombre) => {
    return "Hola " + nombre;
};
```

✅ O si es **muy corta** (una sola línea), aún más breve:

```javascript
const saludar = nombre => "Hola " + nombre;
```

¡No necesitas `function`, ni `return`, ni llaves si es una sola línea!

---

# 🎯 Ejemplo práctico con función lambda:

Mira cómo se ve el mismo ejemplo que antes, pero con una arrow function:

```javascript
console.log(procesarEntrada("Alfonso", (nombre) => "¡Bienvenido, " + nombre + "!"));
```

➡️ ¡Súper compacto y elegante!

---

# 🛠️ ¿Cómo transformar nuestros ejercicios anteriores a funciones lambda?

---

## ✏️ Ejercicio 1: ¡Despide con estilo! (con lambda)

Antes (anónima tradicional):

```javascript
console.log(procesarSalida("María", function(nombre) {
    return "Adiós, " + nombre;
}));
```

Ahora (lambda):

```javascript
console.log(procesarSalida("María", (nombre) => "Adiós, " + nombre));
```

---

## ✏️ Ejercicio 2: ¡Descuentos para todos! (con lambda)

Antes:

```javascript
console.log(calcularPrecioFinal(100, function(precio) {
    return precio * 0.8;
}));
```

Ahora:

```javascript
console.log(calcularPrecioFinal(100, (precio) => precio * 0.8));
```

---

## ✏️ Ejercicio 3: ¡Correos que enamoran! (con lambda)

Antes:

```javascript
console.log(generarCorreo("Carlos", function(nombre) {
    return "Estimado/a " + nombre + ", su pedido ha sido recibido.";
}));
```

Ahora:

```javascript
console.log(generarCorreo("Carlos", (nombre) => "Estimado/a " + nombre + ", su pedido ha sido recibido."));
```

---

## ✏️ Ejercicio 4: ¡Número mágico! (con lambda)

Antes:

```javascript
console.log(evaluarNumero(7, function(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }
}));
```

Ahora:

```javascript
console.log(evaluarNumero(7, (numero) => {
    return numero % 2 === 0 ? "El número " + numero + " es par" : "El número " + numero + " es impar";
}));
```

---
# ⚡ Ejercicios de Funciones Lambda (Arrow Functions)

---

# 🟢 Nivel 1: Básico — ¡Misiones de Superhéroes!

###  Ejercicio 1: ¡Saluda como un héroe!

Crea una función `saludoHeroe` que tome el nombre de un héroe y devuelva: `"¡Saludos, [nombre]! El mundo te necesita."`

**Ejemplo esperado:**

```javascript
console.log(saludoHeroe("Spider-Man"));
// Debería imprimir: "¡Saludos, Spider-Man! El mundo te necesita."
```

---

# 🟡 Nivel 2: Intermedio — ¡Sistema de Batallas RPG!

###  Ejercicio 2: ¡Calcula el daño!

Crea una función `calcularDaño` que reciba dos valores: `ataque` y `defensa`, y un callback usando arrow function.

El callback debe:
- Si el ataque es mayor que defensa, retornar el daño causado (ataque - defensa).
- Si no, retornar 0 (no hay daño).

**Ejemplo esperado:**

```javascript
console.log(calcularDaño(80, 60, (ataque, defensa) => ataque > defensa ? ataque - defensa : 0));
// Debería imprimir: 20
```

---

# 🟠 Nivel 3: Avanzado — ¡Clasificación en Hogwarts!

###  Ejercicio 3: ¡Sombrero seleccionador!

Crea una función `elegirCasa` que reciba un puntaje de personalidad y un callback lambda.

El callback debe:
- Si el puntaje es menor que 25, retornar `"Hufflepuff"`.
- Si está entre 25 y 50, retornar `"Ravenclaw"`.
- Si está entre 51 y 75, retornar `"Gryffindor"`.
- Si es mayor que 75, retornar `"Slytherin"`.

**Ejemplo esperado:**

```javascript
console.log(elegirCasa(48, (puntaje) => {
    if (puntaje < 25) return "Hufflepuff";
    else if (puntaje <= 50) return "Ravenclaw";
    else if (puntaje <= 75) return "Gryffindor";
    else return "Slytherin";
}));
// Debería imprimir: "Ravenclaw"
```

---

# 🔴 Nivel 4: Experto — ¡Inventario de Aventureros!

### Ejercicio 4: ¡Duplica tus objetos mágicos!

Crea una función `mejorarInventario` que reciba un array de objetos y un callback lambda.

El callback debe devolver un **nuevo array** donde:
- Si el objeto es "espada", se duplica el nombre.
- Si el objeto es "escudo", se triplica el nombre.
- Si es otro objeto, se mantiene igual.

**Ejemplo esperado:**

```javascript
console.log(mejorarInventario(["espada", "escudo", "poción"], (items) => 
    items.map(item => item === "espada" ? item + item : item === "escudo" ? item + item + item : item)
));
// Debería imprimir: ["espadaespada", "escudoescudoescudo", "poción"]
```

---

# ¡Conquista el mundo de JavaScript con funciones lambda!
