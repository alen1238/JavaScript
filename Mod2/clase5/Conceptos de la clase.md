
#  ¿Qué es Mongoose?

**Mongoose** es una biblioteca de Node.js que facilita la interacción con bases de datos **MongoDB**.  
Permite trabajar con datos usando una **estructura orientada a objetos** y aplica validaciones, reglas y funciones avanzadas sobre los documentos.

---

##  ¿Por qué usar Mongoose?

MongoDB es una base de datos NoSQL que almacena documentos en formato JSON (BSON internamente), y es muy flexible. Pero esa flexibilidad puede llevar a errores si no se controla la forma en que se almacenan los datos.

Mongoose proporciona:

- **Schemas**: Definen la estructura de los documentos.
- **Validaciones**: Verifica tipos de datos, requeridos, expresiones regulares, etc.
- **Modelos**: Interfaz para crear, leer, actualizar y eliminar datos.
- **Middlewares**: Lógica personalizada que se ejecuta antes o después de ciertas operaciones.
- **Relaciones**: Permite referencias entre documentos.
- **Consultas avanzadas**: Métodos poderosos para trabajar con datos (`find`, `populate`, `aggregate`, etc).

---

## Instalación

Para instalar Mongoose en tu proyecto Node.js:

```bash
npm install mongoose
```

---

## Conexión básica a MongoDB

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mi_basedatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión:', err));
```

# ¿Qué es un Schema en Mongoose?

En Mongoose, un **schema** es una herramienta que permite definir la **estructura y las reglas** de los documentos que se guardarán en una colección de MongoDB. Dicho de otro modo, es como un plano o molde que determina **qué campos** tendrá un documento, **qué tipo de datos** debe tener cada campo y **qué validaciones** deben cumplirse.

MongoDB por sí sola es una base de datos NoSQL, lo que significa que no impone una estructura fija en los documentos. Mongoose, que es una librería de modelado para Node.js, introduce este concepto de schema para dar orden, validación y control sobre los datos que se almacenan.

---

## ¿Qué define un schema?

Cuando defines un schema con Mongoose, estás especificando:

1. **Los campos (también llamados paths)** que tendrá el documento.
2. **Las propiedades o reglas de cada campo**, como el tipo de dato, si es obligatorio, si debe cumplir con una expresión regular, entre otros.

### Ejemplo

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w.-]+@[\w-]+\.[a-z]{2,}$/
  },
  edad: {
    type: Number,
    min: 18,
    max: 100
  }
});
```

---

## Componentes del schema

### 1. **Campos o paths**

Los campos son las claves principales del objeto que estás modelando. En el ejemplo anterior, los campos son:

- `nombre`
- `correo`
- `edad`

Cada uno representa un **atributo** del documento dentro de la colección. En la documentación de Mongoose también se les llama _"paths"_.

---

### 2. **Propiedades del campo**

Son las **reglas** o **metadatos** que definen cómo Mongoose debe manejar cada campo. Aquí algunos ejemplos comunes:

| Propiedad     | ¿Qué hace?                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `type`        | Define el tipo de dato (`String`, `Number`, `Date`, etc.)                  |
| `required`    | Hace que el campo sea obligatorio                                           |
| `min`         | Valor mínimo (para números o fechas)                                       |
| `max`         | Valor máximo (para números o fechas)                                       |
| `minlength`   | Longitud mínima (para cadenas de texto)                                    |
| `maxlength`   | Longitud máxima (para cadenas de texto)                                    |
| `match`       | Valida con una expresión regular (regex)                                   |
| `enum`        | Restringe los valores posibles del campo                                   |
| `default`     | Asigna un valor por defecto si no se especifica uno                        |
| `unique`      | Garantiza que el valor no se repita (crea un índice único en la colección) |
| `validate`    | Permite agregar validaciones personalizadas                                |

---

### 3. **Tipos de dato disponibles**

Mongoose reconoce varios tipos de datos estándar que puedes usar en los schemas:

- `String`
- `Number`
- `Date`
- `Boolean`
- `Array`
- `Buffer`
- `ObjectId` (para referencias entre documentos)
- `Mixed` (tipo flexible, acepta cualquier cosa)
- `Map` (clave-valor similar a un objeto)

#### Ejemplos:

```js
activo: { type: Boolean },
fechaRegistro: { type: Date, default: Date.now },
etiquetas: { type: [String] }
```

---

## Forma simplificada

Cuando no necesitas agregar muchas reglas, puedes usar una forma corta para definir campos. Por ejemplo:

```js
const esquemaSimple = new Schema({
  nombre: String,
  edad: Number
});
```

Esto es equivalente a:

```js
const esquemaCompleto = new Schema({
  nombre: { type: String },
  edad: { type: Number }
});
```

Pero si quieres añadir validaciones como `required`, `min`, etc., debes usar la forma extendida.

---

El schema es una pieza fundamental en Mongoose, ya que te permite:

- Definir claramente la forma de tus datos.
- Aplicar validaciones automáticamente.
- Garantizar consistencia en la base de datos.
- Agilizar la integración entre MongoDB y tu aplicación Node.js.

### Estructura general de un campo:

```js
campo: {
  type: TipoDeDato,
  propiedad1: valor,
  propiedad2: valor,
  ...
}
```

---

## Paso siguiente

Una vez definido un schema, puedes crear un **modelo** con `mongoose.model`, que será la interfaz para interactuar con la colección correspondiente:

```js
const Usuario = mongoose.model('Usuario', usuarioSchema);
```

Esto te permitirá crear, leer, actualizar y eliminar documentos de forma sencilla con validaciones automáticas.

# ¿Qué es un Modelo en Mongoose?

Un **modelo** es una clase construida a partir de un **esquema**.

Te permite:

- Crear documentos nuevos.
- Leer datos de la base.
- Actualizar registros.
- Eliminar documentos.
- Hacer validaciones automáticamente.
- Ejecutar middleware o lógica personalizada.

>  Es la herramienta que usás para interactuar con una colección específica en MongoDB.

---

##  Frase clave

> El esquema define la forma del documento.  
> El modelo te permite usarlo.

---

##  Cómo se crea un modelo

```js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String
});

// Creamos el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
```

Aquí:

- `"Usuario"` es el **nombre del modelo**.
- `usuarioSchema` es el **esquema que define su estructura**.

---

## ¿Qué hace internamente Mongoose con ese modelo?

Cuando haces:

```js
const Usuario = mongoose.model('Usuario', usuarioSchema);
```

Mongoose crea automáticamente:

- Una **colección en MongoDB** llamada `usuarios` (en plural y en minúscula).
- Métodos especiales como:

```js
Usuario.find();                  // Buscar
Usuario.create();                // Insertar
Usuario.findByIdAndUpdate();     // Editar
Usuario.deleteOne();             // Borrar
new Usuario();                   // Crear instancia nueva
```

---

## Ejemplo completo

```js
// 1. Crear instancia
const nuevo = new Usuario({
  nombre: 'Alejandra',
  correo: 'alejandra123@gmail.com'
});

// 2. Guardar
await nuevo.save();

// 3. Buscar
const encontrados = await Usuario.find({ nombre: 'Alejandra' });

// 4. Actualizar
await Usuario.findOneAndUpdate({ correo: 'alejandra@gmail.com' }, { nombre: 'Alejandra Castro' });

// 5. Borrar
await Usuario.deleteOne({ correo: 'alejandra@gmail.com' });
```

---

## Relación entre Esquema y Modelo

| Concepto | Función |
|----------|---------|
| **Schema** | Define cómo debe verse un documento |
| **Model**  | Permite crear, leer, actualizar y borrar documentos en la colección basada en ese esquema |

---


```js
const esquema = new mongoose.Schema({ ... });       // Estructura
const Modelo = mongoose.model('Nombre', esquema);   // Herramienta para usar esa estructura
```


## Ejemplo creando Esquema + Modelo + Documento

```js
const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
  nombre: String,
  correo: String
});

const Usuario = model('Usuario', usuarioSchema);

// Crear documento
const nuevoUsuario = new Usuario({ nombre: 'Ana', correo: 'ana@gmail.com' });
await nuevoUsuario.save();
```

---

| Concepto     | ¿Qué hace?                                                      |
|--------------|------------------------------------------------------------------|
| `Schema`     | Define la estructura y reglas de un documento                   |
| `Model`      | Permite interactuar con una colección                           |
| `Document`   | Instancia de un modelo que representa un registro en la base de datos |
| `Middleware` | Funciones que se ejecutan antes o después de ciertas acciones   |

---

## 🌐 Enlace oficial

[📚 Documentación oficial de Mongoose](https://mongoosejs.com/docs/index.html)
