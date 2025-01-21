# Amigo Secreto

## Descripción

Esta aplicación permite organizar un sorteo de "amigo secreto" de forma sencilla y divertida. Los usuarios pueden agregar los nombres de sus amigos a una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

---

## Funcionalidades

### 1. **Agregar nombres**
- Los usuarios pueden escribir el nombre de un amigo en un campo de texto.
- Al hacer clic en el botón "Añadir", el nombre se agrega a una lista visible.

### 2. **Validar entrada**
- Si el campo de texto está vacío, se muestra una alerta indicando que deben ingresar un nombre válido.

### 3. **Visualizar la lista**
- Los nombres ingresados aparecen en una lista ordenada debajo del campo de entrada.

### 4. **Sorteo aleatorio**
- Al hacer clic en el botón "Sortear amigo", se selecciona aleatoriamente un nombre de la lista.
- El resultado del sorteo se muestra en la página.

---

## Estructura del Proyecto

### Archivos principales
1. **HTML** (`index.html`):
   - Estructura base de la aplicación.
   - Incluye los elementos necesarios como el campo de entrada, botones, y listas para mostrar los nombres y resultados.

2. **CSS** (`style.css`):
   - Define los estilos para la apariencia de la aplicación, como colores, tipografías y diseño responsivo.

3. **JavaScript** (`app.js`):
   - Contiene toda la lógica de la aplicación:
     - Gestión de nombres ingresados.
     - Actualización dinámica del DOM.
     - Sorteo aleatorio del "amigo secreto".

---

## Cómo usar la aplicación

1. Abre el archivo `index.html` en un navegador web.
2. En el campo de texto, escribe el nombre de un amigo.
3. Haz clic en el botón "Añadir" para incluirlo en la lista.
4. Repite este proceso hasta que hayas agregado todos los nombres.
5. Haz clic en el botón "Sortear amigo" para elegir aleatoriamente un nombre de la lista.
6. El nombre sorteado aparecerá en la parte inferior de la pantalla.

---

## Ejemplo de uso

1. Escribe "Ana" y presiona "Añadir".
2. Escribe "Carlos" y presiona "Añadir".
3. Escribe "Luis" y presiona "Añadir".
4. Haz clic en "Sortear amigo".
   - Resultado: "🎉 El amigo secreto es: Carlos 🎉" (nombre generado aleatoriamente).

---

## Requisitos

- Un navegador web moderno (Google Chrome, Mozilla Firefox, etc.).
- Archivos de proyecto:
  - `index.html`
  - `style.css`
  - `app.js`

---

## Personalización

- **Estilos:** Modifica `style.css` para personalizar los colores, fuentes y diseño de la aplicación.
- **Lógica:** Agrega nuevas funcionalidades o cambia la lógica del sorteo en `app.js`.

---

## Licencia

Este proyecto está disponible bajo la Licencia MIT. Puedes usarlo y modificarlo libremente para tus necesidades.

---

¡Disfruta de tu sorteo de amigo secreto! 🎉


