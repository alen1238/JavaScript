
# Guía práctica de Expresiones Regulares para Mongoose

Esta guía está diseñada para ayudarte a entender y aplicar expresiones regulares dentro de esquemas Mongoose en Node.js.

---

## 1. Sintaxis básica de una expresión regular

En JavaScript (y por tanto en Mongoose), las expresiones regulares se escriben así:

```
/patrón/opciones
```

###  Ejemplos:

```js
/abc/             // Coincide con cualquier cadena que contenga "abc"
/^abc/            // Empieza con "abc"
/abc$/            // Termina con "abc"
/^abc$/           // Exactamente "abc"
/[a-z]/           // Cualquier letra minúscula
/\d/              // Un dígito (0–9)
```

---

## 2. Slashes `/` y Backslashes `\`

### 🔹 Slashes `/.../`

Son **delimitadores** de la expresión regular en JavaScript. No son parte del patrón, simplemente lo encierran.

```js
/palabra/
```

### 🔹 Backslash `\`

Se utiliza para **escapar caracteres especiales** o activar secuencias especiales.

| Código | Significado |
|--------|-------------|
| `\d`   | Dígito (0-9) |
| `\D`   | No es un dígito |
| `\w`   | Letra, número o guion bajo |
| `\W`   | Cualquier cosa que no sea `\w` |
| `\s`   | Espacio en blanco |
| `\S`   | Todo excepto espacio |
| `\\`  | Un **backslash** literal |

---

## 3. Componentes más comunes

| Símbolo | Nombre                | Significado |
|---------|------------------------|-------------|
| `^`     | Inicio de línea        | La cadena debe empezar así |
| `$`     | Fin de línea           | La cadena debe terminar así |
| `.`     | Punto                  | Cualquier carácter (menos salto de línea) |
| `*`     | Asterisco              | 0 o más repeticiones |
| `+`     | Más                    | 1 o más repeticiones |
| `?`     | Opcional               | 0 o 1 repetición |
| `{n}`   | Repetición exacta      | Exactamente n veces |
| `{n,}`  | Repetición mínima      | Al menos n veces |
| `{n,m}` | Rango de repeticiones  | Entre n y m veces |
| `[...]` | Clase de caracteres    | Uno de esos caracteres |
| `[^...]`| Negación               | Cualquier cosa excepto eso |
| `|`     | Alternancia (OR)       | Uno u otro |

---

## 4. Ejemplo explicado

```js
/^[A-Za-z0-9]{5,10}$/
```

- `^` → debe comenzar aquí.
- `[A-Za-z0-9]` → letras y números.
- `{5,10}` → entre 5 y 10 caracteres.
- `$` → debe terminar aquí.

✅ Coincide con: `"abc12"`, `"A9d9k3"`, `"ZZZ123"`  
❌ No coincide con: `"a"`, `"muylargonombre123"`

---

## 5. Cuidado con los backslashes en strings

Cuando escribes una expresión regular como **cadena de texto** en Mongoose:

```js
match: "^\\d{3}$"
```

Necesitas **doblar** los `\` porque JavaScript los interpreta como caracteres especiales. En cambio, si usas regex directamente:

```js
match: /^\d{3}$/
```

---

## 6. Ejercicio resuelto

```js
/^\d{4}-\d{2}-\d{2}$/
```

Coincide con fechas en formato `YYYY-MM-DD`, por ejemplo: `2023-08-12`.

---
## 7.  Ejemplos adicionales para familiarizarse

###  Validar solo letras (mayúsculas y minúsculas)
```js
/^[A-Za-z]+$/
```

###  Validar letras con espacios (para nombres completos)
```js
/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/
```

###  Validar solo números
```js
/^\d+$/
```

###  Validar que empiece por letra y tenga entre 3 y 15 caracteres alfanuméricos
```js
/^[A-Za-z][A-Za-z0-9_]{2,14}$/
```

###  Validar un correo electrónico básico
```js
/^\S+@\S+\.\S+$/
```

###  Validar que termine en ".com"
```js
/\.com$/
```

###  Validar un texto que contenga una palabra específica, como "admin"
```js
/admin/
```

###  Validar fechas en formato DD/MM/YYYY
```js
/^\d{2}\/\d{2}\/\d{4}$/
```

###  Validar matrícula tipo "ABC-123"
```js
/^[A-Z]{3}-\d{3}$/
```


## 8. Ejercicios para practicar (con uso en esquemas Mongoose)

1. Validar un nombre que contenga solo letras y espacios.
2. Validar un correo electrónico válido.
3. Validar una contraseña que tenga al menos 8 caracteres, una mayúscula, una minúscula y un número.
4. Validar un número de celular colombiano de 10 dígitos.
5. Validar un código postal de 5 dígitos exactos.
6. Validar un nombre de usuario que empiece con letra y contenga letras, números y guion bajo.
7. Validar un campo que debe tener entre 3 y 15 caracteres alfanuméricos.
8. Validar una URL que empiece por "http" o "https".
9. Validar un campo que acepte solo palabras en mayúsculas.
10. Validar una matrícula con el formato "ABC-123".
11. Validar un número de documento que puede contener puntos opcionales: `12.345.678` o `12345678`.
12. Validar una clave que no contenga espacios.
13. Validar un código que debe terminar en "-MX".
14. Validar un campo que solo contenga letras con tildes.
15. Validar un campo de fecha que acepte "DD/MM/YYYY".

Puedes practicar creando un esquema Mongoose por cada ejercicio con `match: /expresión/` o usando funciones de validación.

---

¡Practica cada uno con Mongoose y verás cómo tus esquemas se vuelven más robustos!
