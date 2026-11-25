# Ejercicio: Servidor con Express

Currículum servido con **Node.js + Express 5** y plantillas **EJS**.

## Cómo correrlo

Requiere Node.js 20.11 o superior.

```bash
cd ejercicio-servidor
npm install
npm start        # modo normal
npm run dev      # modo desarrollo con recarga automática (node --watch)
```

Abrir <http://localhost:3000>.

## Rutas

| Método | Ruta        | Descripción                                          |
| ------ | ----------- | ---------------------------------------------------- |
| GET    | `/`         | Muestra el currículum.                               |
| POST   | `/contacto` | Recibe el formulario de contacto y responde con un agradecimiento. |
| *      | otra        | Página 404.                                          |
