# Ejercicios Progresivos de Modelado de Datos con Mongoose

En estos ejercicios veremos la importancia profesional de separar las responsabilidades entre un esquema y el modelo.

---

##  Parte Teórica: Integración de Mongoose con Express

###  Paso 1: Crear el Esquema y el Modelo

```js
// models/producto.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    categoria: String
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
```

### 🔎 Paso 2: Importar el Modelo en Express

```js
// app.js
const express = require('express');
const mongoose = require('mongoose');
const Producto = require('./models/producto'); // Importación del modelo

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tienda');

// Ahora puedes usar el modelo Producto en las rutas
app.post('/productos', async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.send('Producto guardado');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
```

> **Qué hicimos?:**
>
> - Definimos el esquema en `/models/producto.js`.
> - Lo exportamos con `module.exports`.
> - Lo importamos en `app.js` usando `require()`.
> - Ya puedes crear, leer o modificar productos usando ese modelo.

---

## Ejercicios Avanzados

### Ejercicio 6: Validación de Longitud y Patrones

**Objetivo:** Asegurar que un campo cumpla con un patrón específico.

**Idea:** Usa una expresión regular dentro del esquema para validar el formato.

1. Agrega un campo `codigo` que:
   - Sea obligatorio.
   - Cumpla con el patrón de 3 letras mayúsculas seguido de 3 dígitos (ejemplo: ABC123).

```js
codigo: {
  type: String,
  required: true,
  match: /^[A-Z]{3}\d{3}$/
}
```

**Explicación:**

- `^[A-Z]{3}`: Indica que debe empezar con exactamente 3 letras mayúsculas.
- `\d{3}$`: Indica que debe terminar con exactamente 3 dígitos.

---

### Ejercicio 7: Validación Condicional

**Objetivo:** Hacer que ciertos campos sean obligatorios según condiciones.

**Idea:** Usa validaciones personalizadas para validar según otro campo.

1. Agrega un campo `oferta` (booleano, por defecto en `false`).
2. Si `oferta` es `true`, el campo `precioOferta` debe ser obligatorio y mayor a 0.

```js
precioOferta: {
  type: Number,
  validate: {
    validator: function(value) {
      return !this.oferta || (value > 0);
    },
    message: 'El precio de oferta debe ser mayor que 0 cuando hay oferta.'
  }
}
```

**Explicación:** Si `oferta` es `false`, no se valida nada. Si es `true`, el precio de oferta debe ser mayor a 0.

---

### Ejercicio 8: Validación con Fechas

**Objetivo:** Validar que una fecha sea futura.

**Idea:** Usa una función de validación personalizada.

1. Agrega un campo `fechaLanzamiento`.
2. Asegúrate que siempre sea una fecha futura.

```js
fechaLanzamiento: {
  type: Date,
  validate: {
    validator: function(value) {
      return value > new Date();
    },
    message: 'La fecha de lanzamiento debe ser futura.'
  }
}
```

**Explicación:** La validación compara la fecha ingresada con la fecha actual.

---

### Ejercicio 9: Validación de Array y Subdocumentos

**Objetivo:** Validar un campo que sea un array de objetos.

**Idea:** Usa subesquemas y validaciones sobre el array.

1. Agrega un campo `variantes` como array.
2. Cada variante debe tener:
   - `color`: String (obligatorio).
   - `disponible`: Booleano.

```js
variantes: {
  type: [
    {
      color: { type: String, required: true },
      disponible: Boolean
    }
  ],
  validate: {
    validator: function(value) {
      return value.length > 0;
    },
    message: 'Debe haber al menos una variante.'
  }
}
```

**Explicación:** Se define un array de objetos con sus propias reglas. Además, se valida que el array no esté vacío.

---

### Ejercicio 10: Validación de Unicidad

**Objetivo:** Evitar duplicados en campos clave.

**Idea:** Usa índices únicos en el esquema.

1. Agrega un campo `sku` (string, obligatorio).
2. Asegúrate que `sku` sea único.

```js
sku: {
  type: String,
  required: true,
  unique: true
}
```

**Explicación:** La opción `unique` crea un índice único para evitar duplicados en la base de datos.

> **Nota:** Es importante crear el índice en la base de datos para que la restricción funcione.

---

## Recomendación Final

Al terminar estos ejercicios, tendrás un CRUD completo, buenas prácticas de validación y control total sobre la integridad de los datos.

> ¡Este es un excelente punto de partida para proyectos profesionales!

---

## Bonus: Ideas para seguir practicando

- Agrega un campo de fecha de creación automática.
- Crea un esquema de usuarios y relaciona con los productos.
- Implementa páginas o filtros en la ruta GET.

