# Ejercicios de Ciclos en JavaScript

## 1. Teoría Básica sobre Ciclos en JavaScript

En JavaScript, los ciclos permiten ejecutar un bloque de código varias veces bajo ciertas condiciones. Estos se aplican en situaciones como:

- Repetir una acción mientras el usuario no introduzca una respuesta válida.
- Recorrer elementos de una lista o array.
- Generar salidas repetitivas, como tablas o secuencias numéricas.
- Realizar cálculos acumulativos, como sumar valores.

### `for`
Se usa cuando sabemos cuántas veces queremos repetir un bloque de código, como en la generación de tablas de multiplicar o recorrer listas con un número conocido de elementos.

```javascript
for (inicialización; condición; incremento) {
    // bloque de código a ejecutar
}
```

### `while`
Se usa cuando **no sabemos cuántas veces** se ejecutará el ciclo, por ejemplo, cuando esperamos una condición dinámica del usuario (como adivinar un número).

```javascript
while (condición) {
    // bloque de código a ejecutar
}
```

### `do...while`
Asegura que el código se ejecute al menos una vez. Útil cuando siempre queremos realizar una acción antes de verificar la condición, como leer datos de entrada al menos una vez.

```javascript
do {
    // bloque de código a ejecutar
} while (condición);
```

---

## 2. Ejercicios Iniciales
> 💡 **TIP:** Usa `parseInt()` para convertir cadenas en números, y `prompt()` para obtener datos del usuario.

### Ejercicio 1: Contando Ovejas (for) 🐑
**Aplicación:** Ideal para enseñar el conteo controlado, por ejemplo, contar pasos, elementos o intentos.

```javascript
let cantidad = parseInt(prompt("¿Cuántas ovejas contarás antes de dormir?"));

for (let i = 1; i <= cantidad; i++) {
    console.log(`🐑 Oveja ${i}`);
}

console.log("¡Hora de dormir! 😴");
```

### Ejercicio 2: Ping Pong de Números (while) 🏓
**Aplicación:** Juegos o dinámicas en las que el usuario debe acertar una respuesta sin conocerla de antemano.

```javascript
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento = 0;
let respuesta;

while (respuesta != numeroSecreto) {
    respuesta = parseInt(prompt("Adivina el número (1-10):"));
    intento++;
}

console.log(`¡Correcto! Adivinaste en ${intento} intentos.`);
```

### Ejercicio 3: Contador de Billetes (do...while) 💰
**Aplicación:** Simulación de sistemas que aceptan múltiples entradas, como depósitos bancarios o registro de productos.

```javascript
let total = 0;
let billete;

do {
    billete = parseInt(prompt("Ingresa un billete (0 para terminar):"));
    if (billete > 0) total += billete;
} while (billete !== 0);

console.log(`Total depositado: $${total}`);
```

---

## 3. Más Ejercicios (Nivel Progresivo)

### Ejercicio 4: Tabla de Multiplicar
**Aplicación:** Generación de estructuras repetitivas, como tablas o listados.

```javascript
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
```

### Ejercicio 5: Adivina con pista (while)
**Aplicación:** Introducción a condicionales dentro de ciclos para mejorar la interacción usuario-sistema.

```javascript
let secreto = Math.floor(Math.random() * 20) + 1;
let adivina;

while (adivina !== secreto) {
    adivina = parseInt(prompt("Adivina el número (1-20):"));

    if (adivina < secreto) {
        console.log("Demasiado bajo");
    } else if (adivina > secreto) {
        console.log("Demasiado alto");
    }
}

console.log("¡Lo lograste!");
```

### Ejercicio 6: Validar contraseña (do...while)
**Aplicación:** Seguridad básica y validación de ingreso de datos.

```javascript
let contrasena;
do {
    contrasena = prompt("Ingresa la contraseña (pista: 'secreto123'):");
} while (contrasena !== "secreto123");

console.log("Acceso concedido.");
```

### Ejercicio 7: Suma de números pares (for)
**Aplicación:** Acumulación y uso de condiciones específicas dentro de ciclos.

```javascript
let limite = parseInt(prompt("Ingresa el límite superior para sumar pares:"));
let suma = 0;

for (let i = 2; i <= limite; i += 2) {
    suma += i;
}

console.log(`La suma de los números pares hasta ${limite} es ${suma}`);
```

### Ejercicio 8: Recolectando frutas (do...while + array)
**Aplicación:** Recolección dinámica de entradas del usuario y uso básico de arreglos.

```javascript
let frutas = [];
let fruta;

do {
    fruta = prompt("Ingresa una fruta (o escribe 'fin' para terminar):");
    if (fruta.toLowerCase() !== 'fin') {
        frutas.push(fruta);
    }
} while (fruta.toLowerCase() !== 'fin');

console.log("Lista de frutas:", frutas);
```

---
## 🎯 Desafíos Extra

1. Haz un programa que genere una cuenta regresiva desde cualquier número hasta 0.
2. Crea una lista de tareas donde el usuario puede agregar tareas hasta que escriba "terminar".
3. Haz un programa que sume solo los múltiplos de 3 hasta un número ingresado.

💡 ¡Estos ejercicios no están resueltos! Intenta resolverlos tú mismo.

---
🧠 # Tips para Aprender Mejor los Ciclos y Programar con Éxito

🎓 Aprende a Aprender

La programación no se memoriza, ¡se practica! Aquí tienes algunas recomendaciones para aprender más eficientemente:

1. 🔁 Practica con pequeñas variaciones

Después de cada ejercicio, cámbiale algo:

En lugar de contar ovejas, cuenta estrellas, pasos o aplausos.

Modifica los rangos de los ciclos.

Cambia el mensaje que imprime el programa.

👉 Esto entrena tu flexibilidad mental y te hace comprender cómo y por qué funcionan las cosas.

2. 🧩 Divide y vencerás

Si no entiendes un ciclo, divídelo en partes:

¿Qué valor tiene la variable al inicio?

¿Cuándo se detiene?

¿Qué pasa dentro del ciclo?

Escribe tus propias preguntas y respóndelas en voz alta o en papel.

3. 💬 Explica tu código

Explícale tu código a un amigo, a tu mascota, o incluso en voz alta. Esto se llama la técnica del “rubber duck debugging” y es muy efectiva para encontrar errores y aprender.

4. ✍️ Escribe a mano (de vez en cuando)

Hacer un diagrama de flujo o escribir el ciclo en papel ayuda a memorizar la lógica. ¡No subestimes el poder del lápiz!

5. 🚀 Combina con juegos

Haz tus propios mini-juegos: contador de vidas, adivinanzas, loterías, o simulaciones. ¡El código es tu juguete!

6. 🔍 Usa herramientas visuales

Plataformas como:

Visualgo.net

JS Tutor

te permiten ver paso a paso cómo se ejecuta un ciclo. ¡Ideal para mente visual!

7. 📆 Práctica diaria de 10-15 minutos

Más vale practicar poco todos los días que una sola vez por muchas horas. El cerebro aprende mejor por repetición distribuida.