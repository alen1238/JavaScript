# Objetos en JavaScript

En JavaScript, un **objeto** es una colección de propiedades, donde cada propiedad se compone de una clave (nombre) y un valor. Los objetos nos permiten agrupar datos relacionados y comportamientos en una sola entidad.

**Sintaxis básica para crear un objeto:**
```javascript
const persona = {
  nombre: "Laura",
  edad: 25,
  profesion: "Desarrolladora"
};
```

**Acceder a propiedades:**
- Usando **punto** (`.`)
```javascript
console.log(persona.nombre); // Imprime "Laura"
```
- Usando **corchetes** (`[]`)
```javascript
console.log(persona["edad"]); // Imprime 25
```

**Modificar propiedades:**
```javascript
persona.edad = 26;
persona["profesion"] = "Ingeniera de Software";
```

**Agregar nuevas propiedades:**
```javascript
persona.pais = "España";
```

**Eliminar propiedades:**
```javascript
delete persona.pais;
```

---

# Ejercicios de práctica

## Nivel 1 (básico)

1. **Crear un objeto llamado `auto`** que tenga las propiedades: marca, modelo y año. Luego imprime cada propiedad en consola.

2. **Accede al modelo del objeto `auto`** utilizando tanto notación de punto como notación de corchetes.

3. **Modifica el año del objeto `auto`** y agrega una nueva propiedad llamada `color`.

---

## Nivel 2 (intermedio)

4. **Crea un objeto llamado `pelicula`** que contenga: título, director y año de estreno. Luego agrega una propiedad `disponible` con el valor `true` o `false`.

5. **Crea una función que reciba un objeto `pelicula`** y devuelva un string diciendo: "La película [título] fue dirigida por [director]".

6. **Elimina la propiedad `disponible` del objeto `pelicula`** y muestra el objeto actualizado.

---

## Nivel 3 (avanzado)

7. **Crea un objeto `estudiante`** con nombre, edad, materias (un array de strings) y un método llamado `presentarse` que imprima un saludo incluyendo su nombre.

**Tip:**  
- Para agregar funciones dentro de un objeto, se usan métodos.
- Usa `this` para referirte a las propiedades del objeto.

**Ejemplo pequeño:**
```javascript
const estudiante = {
  nombre: "Carlos",
  edad: 20,
  materias: ["Matemáticas", "Programación"],
  presentarse: function() {
    console.log("Hola, mi nombre es " + this.nombre);
  }
};
```

---

8. **Crea un objeto `carrito`** que contenga una lista de productos (array de objetos, cada producto con nombre y precio) y una función para calcular el total de precios.

**Tip:**  
- Usa un array de objetos para los productos.
- Usa un método que recorra el array (`for`, `forEach`, o `reduce`) para sumar los precios.

**Ejemplo pequeño:**
```javascript
const carrito = {
  productos: [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 40 }
  ],
  calcularTotal: function() {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.precio;
    });
    return total;
  }
};
```

---

9. **Crea un objeto `usuario`** con nombre, correo y una función `actualizarCorreo` que reciba un nuevo correo y lo actualice.

**Tip:**  
- La función debe usar `this` para modificar el correo.
- Recibe el nuevo correo como parámetro.

**Ejemplo pequeño:**
```javascript
const usuario = {
  nombre: "Ana",
  correo: "ana@email.com",
  actualizarCorreo: function(nuevoCorreo) {
    this.correo = nuevoCorreo;
  }
};
```
Nota: Para actualizar el correo de este objeto en JavaScript, puedes llamar al método `actualizarCorreo` pasando el nuevo correo como argumento. Aquí tienes un ejemplo de cómo hacerlo:

```javascript
// Llamamos al método actualizarCorreo con el nuevo correo
usuario.actualizarCorreo("nuevoCorreo@email.com");

// Ahora el correo ha sido actualizado
console.log(usuario.correo); // Debería mostrar "nuevoCorreo@email.com"
```
---

10. **Crea un objeto `biblioteca`** que contenga un array de libros, cada libro debe ser un objeto con título y autor. Agrega métodos para agregar un libro nuevo y listar todos los libros.

**Tip:**  
- Los métodos serán funciones dentro del objeto.
- Para listar los libros puedes recorrer el array y mostrar el título y autor.

**Ejemplo pequeño:**
```javascript
const biblioteca = {
  libros: [
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" }
  ],
  agregarLibro: function(titulo, autor) {
    this.libros.push({ titulo: titulo, autor: autor });
  },
  listarLibros: function() {
    this.libros.forEach(libro => {
      console.log(`${libro.titulo} por ${libro.autor}`);
    });
  }
};
```

---

🌟 **Consejo general:** Cuando trabajes con objetos y métodos, recuerda usar `this` para hacer referencia a las propiedades internas del objeto.

