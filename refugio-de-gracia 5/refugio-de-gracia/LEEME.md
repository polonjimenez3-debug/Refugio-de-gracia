# Iglesia Refugio de Gracia — Sitio web

## Estructura
- `index.html` — estructura de la página (no hace falta tocarlo).
- `js/config.js` — **TODO el contenido editable** (textos, horarios, dirección, contacto, redes, fotos).
- `css/styles.css` — colores y tipografías (variables al inicio del archivo).
- `js/main.js` — arma la página con los datos de config.js.
- `img/` — logo y fotografías.

## Ver en tu computadora
Abre `index.html` con doble clic (Chrome, Edge, Safari...). Para mejores resultados con el mapa, usa Visual Studio Code + extensión "Live Server" → clic derecho en index.html → "Open with Live Server".

## Publicar gratis en GitHub Pages
1. Crea cuenta en https://github.com.
2. Botón **New repository** → nombre: `refugio-de-gracia` → **Public** → Create.
3. Clic en **uploading an existing file** y arrastra TODO el contenido de la carpeta (index.html, css, js, img). Presiona **Commit changes**.
4. Ve a **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)` → **Save**.
5. En 1–2 minutos tu sitio estará en `https://TU-USUARIO.github.io/refugio-de-gracia/`.
Para actualizar: edita el archivo en GitHub (lápiz ✏️) o sube el nuevo y haz Commit.

## Cómo modificar
Todo se hace en `js/config.js`:
- **Textos**: cambia lo que está entre comillas.
- **Horarios**: edita `dia`, `hora`, `detalle`; copia un bloque `{ ... },` para añadir otro.
- **Dirección**: `direccion` y `ciudad` (agrega la ciudad para un mapa exacto).
- **Contacto**: WhatsApp (solo números con código de país), Facebook e Instagram (enlace completo), correo. Vacío = "Próximamente".
- **Logo**: reemplaza `img/logo.png` por el nuevo con el mismo nombre (el logo es blanco: se ve sobre fondo azul).
- **Fotos**: guarda `portada.jpg` y `pastor.jpg` en `img/` (JPG, menos de 400 KB; puedes comprimir en squoosh.app) y escribe su ruta en config.js.
- **Colores**: en `css/styles.css`, bloque `:root` del inicio.
