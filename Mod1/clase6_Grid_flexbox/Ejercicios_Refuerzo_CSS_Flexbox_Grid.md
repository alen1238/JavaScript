
# Reforzando lo aprendido: Flexbox, Grid y propiedades CSS relacionadas

## Teoría de apoyo

### 🔷 Flexbox (Flexible Box Layout)

- **Uso principal:** Organizar elementos en una dirección (horizontal o vertical).
- **Contenedor flex:**
  ```css
  display: flex;
  flex-direction: row | column;
  justify-content: center | space-between | space-around;
  align-items: center | flex-start | flex-end;
  ```
- **Propiedades de ítems:**
  ```css
  flex-grow, flex-shrink, flex-basis, align-self
  ```

---

### 🔶 CSS Grid

- **Uso principal:** Crear layouts bidimensionales (filas y columnas).
- **Contenedor grid:**
  ```css
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 5px;
  ```

---

## 🤖 Ejercicios de práctica

### 🔹 Ejercicios Flexbox

1. **Alinear elementos horizontalmente en el centro**
   - 3 cajas dentro de un `div` con `display: flex` y `justify-content: center`.

2. **Menú de navegación responsive**
   - Cambia la dirección a `column` en pantallas pequeñas con `@media`.
   - #####   📱 Ejemplo: Menú de navegación responsive usando Flexbox y `@media`

```html
<!-- HTML -->
<nav class="menu">
  <a href="#">Inicio</a>
  <a href="#">Acerca</a>
  <a href="#">Servicios</a>
  <a href="#">Contacto</a>
</nav>
```

```css
/* CSS */
.menu {
  display: flex;
  justify-content: space-around;
  background-color: #222;
  padding: 10px;
}

.menu a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
}

/* Responsive: en pantallas pequeñas cambia a columna */
@media (max-width: 600px) {
  .menu {
    flex-direction: column;
    align-items: center;
  }

  .menu a {
    padding: 10px 0;
  }
}
```

 En este ejemplo:
- Se usa `display: flex` para crear una barra de navegación horizontal en pantallas grandes.
- Con la media query `@media (max-width: 600px)` se cambia `flex-direction` a `column` para que el menú se apile verticalmente en pantallas pequeñas.
- También se centran los elementos con `align-items: center`.

✅ Ideal para practicar diseño responsive con Flexbox.


3. **Tarjetas alineadas en fila**
   - Usa `flex-wrap` para que pasen a la siguiente línea si no caben.
   - ##### 🃏 Ejemplo: Tarjetas alineadas en fila con `flex-wrap`

```html
<!-- HTML -->
<div class="contenedor-tarjetas">
  <div class="tarjeta">Tarjeta 1</div>
  <div class="tarjeta">Tarjeta 2</div>
  <div class="tarjeta">Tarjeta 3</div>
  <div class="tarjeta">Tarjeta 4</div>
  <div class="tarjeta">Tarjeta 5</div>
</div>
```

```css
/* CSS */
.contenedor-tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background-color: #eee;
}

.tarjeta {
  background-color: #4a90e2;
  color: white;
  padding: 20px;
  width: 200px;
  text-align: center;
  border-radius: 8px;
}
```

En este ejemplo:
- `display: flex` coloca todas las tarjetas en una fila.
- `flex-wrap: wrap` permite que las tarjetas pasen a la siguiente línea si no caben horizontalmente.
- `gap: 10px` agrega espacio entre las tarjetas.

✅ Muy útil para crear secciones tipo "galería" o "catálogo" que se adapten a distintos tamaños de pantalla.


---

### 🔸 Ejercicios Grid

1. **Crear una cuadrícula de 3 columnas**
   ```css
   grid-template-columns: repeat(3, 1fr);
   ```

2. **Galería de imágenes responsiva**
   - Usa `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`

3. **Layout con cabecera, contenido y pie de página**
   - Define áreas con `grid-template-areas`.
   - ##### Ejemplo: Layout con cabecera, contenido y pie de página usando `grid-template-areas`

```html
<!-- HTML -->
<div class="layout">
  <header>Cabecera</header>
  <main>Contenido principal</main>
  <footer>Pie de página</footer>
</div>
```

```css
/* CSS */
.layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 60px 1fr 40px;
  height: 100vh;
}

header {
  grid-area: header;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  grid-area: main;
  background-color: #f0f0f0;
  padding: 1rem;
}

footer {
  grid-area: footer;
  background-color: #555;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

✅ Este layout define tres áreas principales: cabecera, contenido y pie.  
Cada elemento HTML se asigna a un área de la cuadrícula usando la propiedad `grid-area`.  
El resultado es una estructura clara, mantenible y adaptable a futuros cambios.


---

✅ **Reto final:**  
Construye una página de portafolio personal usando **una combinación de Grid y Flexbox**.  

Incluye una galería de imágenes (Grid), un menú superior (Flexbox) y una sección de contacto (formulario con estilo).
