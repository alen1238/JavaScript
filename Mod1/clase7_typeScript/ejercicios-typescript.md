
# Ejercicios Progresivos de TypeScript para Aplicaciones Reales

Este archivo contiene una serie de ejercicios prácticos de TypeScript, diseñados para ayudarte a comprender desde lo básico hasta niveles intermedios y avanzados del lenguaje, aplicándolo a ejemplos cercanos al desarrollo de aplicaciones reales.

---

## 1. **Variables y Tipado Básico**

### Objetivo
Practicar el uso de tipos primitivos, null y union types.

### Ejercicio:
Declara las siguientes variables con su respectivo tipo:

- Un título de video
- Número de vistas
- Temperatura del lugar donde fue grabado
- Si está publicado o no (booleano)
- Un valor nulo
- Un usuario que puede ser una cadena o null

```ts
let titulo: string = "Entrevista con el CEO de YouTube";
let vistas: number = 4500;
// completa las demás variables siguiendo este ejemplo
```

### Ejercicios adicionales:
- Declara una variable que pueda ser un número o un string y prueba asignarle ambos.
- Declara un carrito de compras que puede contener un array de strings o ser null.

---

## 2. **Uso de Tipos Personalizados**

### Objetivo
Aprender a usar `type` para definir estructuras de datos.

### Ejercicio:
Define un tipo `Usuario` que tenga un nombre (string) y una fecha de nacimiento que puede ser string o null. Luego crea un objeto de ese tipo.

```ts
type Usuario = {
    nombre: string;
    fechaNacimiento: string | null;
};

// Declara aquí una persona de tipo Usuario
```

### Ejercicios adicionales:
- Agrega un nuevo campo `correo` al tipo `Usuario`.
- Declara un arreglo de usuarios.

---

## 3. **Uso del tipo `any` y arreglos heterogéneos**

### Objetivo
Explorar el tipo `any` y cómo manejar datos heterogéneos.

### Ejercicio:
Declara una variable tipo `any` y asígnale distintos tipos de valores.

```ts
let data: any = "cargando datos...";
// Cambia el valor de data a un objeto y luego a un arreglo con distintos tipos de datos
```

### Ejercicios adicionales:
- Declara un arreglo con valores de tipo `string | number | boolean`.
- Agrega validación de tipo antes de usar los datos.

---

## 4. **Objetos Anidados y Tipos Compuestos**

### Objetivo
Comprender cómo usar tipos compuestos y objetos anidados.

### Ejercicio:
Define un tipo `Video` que contenga un objeto `estadisticas` con likes, vistas y comentarios. Luego declara un objeto `miVideo`.

```ts
type Estadisticas = {
    likes: number;
    vistas: number;
    comentarios: number;
};

type Video = {
    titulo: string;
    duracion: number;
    autor: string;
    estadisticas: Estadisticas;
};

// Declara aquí tu objeto miVideo
```

### Ejercicios adicionales:
- Agrega un campo `publicado: boolean` al tipo `Video`.
- Crea una función que reciba un video y devuelva un resumen en texto.

---

## 5. **Clases y Programación Orientada a Objetos**

### Objetivo
Introducir el concepto de clases, constructores y métodos.

### Ejercicio:
Crea una clase `UsuarioYoutube` con un constructor que reciba `nombre`, `correo`, y `canal`. Agrega métodos para subir un video y comentar.

```ts
class UsuarioYoutube {
    constructor(
        public nombre: string,
        public correo: string,
        public canal: string
    ) {}

    subirVideo(titulo: string) {
        console.log(`${this.nombre} ha subido un nuevo video: ${titulo}`);
    }

    comentar(video: string, comentario: string) {
        console.log(`${this.nombre} comentó en ${video}: ${comentario}`);
    }
}

// Crea un objeto de esta clase y llama a sus métodos
```

### Ejercicios adicionales:
- Agrega un método `darLike(video: string)`.
- Crea una subclase `AdministradorYoutube` que herede de `UsuarioYoutube` y agregue el método `eliminarComentario`.

---

¡Sigue practicando y mejora tus habilidades en TypeScript para cuando lleguemos a Angular puedas explotar un nivel profesional!
