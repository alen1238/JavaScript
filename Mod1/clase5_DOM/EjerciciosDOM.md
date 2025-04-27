# Manipulación del DOM: Accediendo a Nodos

En JavaScript, el **DOM (Document Object Model)** es una representación en forma de árbol de todos los elementos HTML de una página.  
Cada elemento (etiqueta, texto, comentario) se convierte en un **nodo**, y cada nodo es un **objeto** que JavaScript puede leer o modificar mediante propiedades y métodos.

Gracias al DOM, podemos:
- Acceder a cualquier parte del documento.
- Leer, cambiar o eliminar contenido.
- Agregar nuevos elementos de manera dinámica.

### Propiedades útiles para navegar entre nodos:
- `.parentNode` → accede al nodo padre.
- `.childNodes` → lista todos los nodos hijos (elementos, textos, etc.).
- `.firstChild` y `.lastChild` → primer y último hijo (pueden ser texto o elementos).
- `.nextSibling` y `.previousSibling` → navega entre hermanos adyacentes.
- `.children` → lista solo los hijos que son elementos (ignora nodos de texto).

---

# Instrucciones

1. **Utiliza el siguiente contenido HTML base para realizar todos los ejercicios.**
2. **No modifiques el HTML**, solo trabaja desde JavaScript para navegar entre los nodos.

## Contenido HTML para los ejercicios:
```html
<div id="contenedor">
  <h1>Bienvenidos</h1>
  <p id="parrafo1">Este es el primer párrafo.</p>
  <p id="parrafo2">Este es el segundo párrafo.</p>
  <ul id="lista">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
  </ul>
</div>
```

---

# Ejercicios de práctica

## Nivel 1 (básico)

1. **Selecciona el elemento `<div>`** con `id="contenedor"` y accede a su nodo padre usando `.parentNode`.  
   - Imprime en consola el nombre de la etiqueta del padre (`nodeName`).

2. **Accede al primer hijo** del `contenedor` usando `.firstChild` y luego imprime su tipo de nodo (`nodeType`).

3. **Accede al último hijo** del `contenedor` usando `.lastChild` y muestra su contenido (`textContent`).

---

## Nivel 2 (intermedio)

4. **Selecciona el primer párrafo** (`id="parrafo1"`) y usa `.nextSibling` para acceder a su hermano siguiente.  
   - Imprime en consola qué tipo de nodo es.

5. **Desde `parrafo1`, usa `.nextElementSibling`** para ir directamente al próximo **elemento** (ignorando nodos de texto) y muestra su contenido (`textContent`).

6. **Usa `.children` en el `contenedor`** para obtener sólo los hijos que son elementos.  
   - Imprime cuántos hijos tiene (`length`) y sus nombres (`nodeName`).

---

## Nivel 3 (avanzado)

7. **Recorre todos los `childNodes`** de `contenedor` usando un bucle, y muestra en consola:
   - El tipo de nodo (`nodeType`)
   - El nombre del nodo (`nodeName`)

   **Tip:** Usa `for...of` o `forEach`.

8. **Crea una función `mostrarPrimerElementoHijo(id)`** que reciba el ID de un elemento y devuelva su primer hijo que sea **elemento** (ignora nodos de texto).

   **Tip:** Usa `.children[0]`.

9. **Accede al padre del segundo párrafo (`parrafo2`)** y cambia su color de fondo a amarillo usando JavaScript.

10. **Selecciona el segundo `<li>`** en la lista (`Elemento 2`) y:
    - Accede a su hermano anterior y cambia su texto a “← anterior”.
    - Accede a su hermano siguiente y cambia su texto a “siguiente →”.

---

# Recordatorio Final 👽

- `.firstChild` puede ser un nodo de texto (por espacios o saltos de línea).
- `.children` devuelve solo los nodos de tipo **elemento** (excluye nodos de texto).
- `.nextSibling` navega a **cualquier nodo** (incluso texto o comentarios), pero `.nextElementSibling` solo a **elementos**.

¡El DOM es como explorar un mapa del mundo web! ¡Atrévete a recorrerlo!

---
# Selección de Elementos en el DOM

Para trabajar con los elementos HTML en JavaScript, primero necesitamos **seleccionarlos**.  
Existen varios métodos para seleccionar nodos en el DOM. Aquí te explico los más usados:

---

## Métodos de selección más comunes

### `getElementById`
Selecciona un único elemento usando su **atributo `id`**.

**Sintaxis:**
```javascript
const titulo = document.getElementById("tituloPrincipal");
```

**Notas:**
- Siempre devuelve **un solo elemento**.
- Si no existe un elemento con ese ID, devuelve `null`.

---

### `querySelector`
Selecciona **el primer elemento** que coincida con un **selector de CSS**.

**Sintaxis:**
```javascript
const primerParrafo = document.querySelector("p");
const primerElementoImportante = document.querySelector(".importante");
const titulo = document.querySelector("#tituloPrincipal");
```

**Notas:**
- Devuelve **el primer** elemento que encuentre.
- Puede usar selectores de etiquetas, clases, ids, atributos, etc.

---

### `querySelectorAll`
Selecciona **todos los elementos** que coincidan con un **selector de CSS**, y devuelve una **NodeList** (similar a un array).

**Sintaxis:**
```javascript
const todosLosParrafos = document.querySelectorAll("p");
```

**Notas:**
- Permite recorrer los elementos con `forEach` o `for...of`.
- No es un array real, pero se puede convertir.

---

### `getElementsByClassName`
Selecciona **todos los elementos** que tengan una **clase específica**.

**Sintaxis:**
```javascript
const destacados = document.getElementsByClassName("destacado");
```

**Notas:**
- Devuelve un **HTMLCollection** (una colección en vivo).
- Hay que recorrerla con bucles.

---

### `getElementsByTagName`
Selecciona **todos los elementos** con una **etiqueta específica**.

**Sintaxis:**
```javascript
const todosLosDivs = document.getElementsByTagName("div");
```

**Notas:**
- También devuelve un **HTMLCollection**.
- Se suele usar para recorrer muchos elementos iguales, como todos los `<li>`, `<div>`, etc.

---

# HTML base para resolver los ejercicios

Utiliza este HTML para hacer todos los ejercicios:

```html
<body>
  <h1 id="tituloPrincipal">Bienvenido(a) a la página</h1>

  <p class="introduccion">Esta es la introducción.</p>

  <div class="contenido">
    <p>Primer párrafo del contenido.</p>
    <p class="importante">Segundo párrafo, muy importante.</p>
    <p>Último párrafo del contenido.</p>
  </div>

  <ul class="listaItems">
    <li>Item 1</li>
    <li class="importante">Item 2 (importante)</li>
    <li>Item 3</li>
  </ul>

  <footer id="pieDePagina">
    <p>Todos los derechos reservados.</p>
  </footer>
</body>
```

---

# Ejercicios de práctica

## Nivel 1 (Básico)

1. **Selecciona el título principal** (`<h1>`) usando `getElementById` y muestra su contenido en la consola.

2. **Selecciona el primer párrafo** (introducción) usando `querySelector` y cambia su texto a:  
   `"Bienvenido(a) a nuestra página de prueba."`

3. **Selecciona el primer `<p>` dentro del `div.contenido`** usando `querySelector` y cambia su color de texto a azul.

---

## Nivel 2 (Intermedio)

4. **Selecciona todos los párrafos** dentro de la `div.contenido` usando `querySelectorAll`, recórrelos y agrega un emoji "✏️" al final de su texto.

   **Tip:** Usa `forEach` para recorrer.

5. **Selecciona todos los elementos con la clase "importante"** usando `getElementsByClassName` y cambia su color de fondo a amarillo.

6. **Selecciona todos los `<li>`** de la lista usando `getElementsByTagName` y agrega un número delante del texto (ej: "1 - Item 1", "2 - Item 2", etc.).

---

## Nivel 3 (Avanzado)

7. **Crea una función `resaltarElemento(selector)`** que:
   - Reciba un **selector de CSS** como parámetro.
   - Seleccione el primer elemento que coincida.
   - Le agregue un borde rojo de 2px.

   **Tip:** Usa `querySelector`.

8. **Selecciona el `<footer>`** usando `getElementById` y cambia su texto por `"Gracias por visitarnos."`.

9. **Usa `querySelectorAll` para seleccionar todos los elementos `<p>`** de la página y:
   - Si el párrafo contiene la palabra `"importante"`, ponlo en negrita (`fontWeight: bold`).

   **Tip:** Usa `.textContent.includes("importante")`.

10. **Cuenta cuántos elementos tienen la clase "importante"** y muestra ese número en la consola.

   **Tip:** Usa `.length` sobre el resultado de `getElementsByClassName`.

---

# Consejos finales 👽

- **`getElementById`** y **`querySelector`** son muy rápidos para un único elemento.
- **`querySelectorAll`** es muy flexible para seleccionar varios elementos fácilmente con sintaxis de CSS.
- Recuerda que **`getElementsByClassName`** y **`getElementsByTagName`** devuelven colecciones vivas, ¡no arrays reales!
- Siempre asegúrate de que el elemento exista antes de modificarlo (`if (elemento)`).

¡Aprender a seleccionar bien es el primer paso para dominar el DOM! 

