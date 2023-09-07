
# Product Feedback

El objetivo de este proyecto es crear una red social para una empresa a modo de sugerencias para proyectos, en los cuales se pueden votar, comentar, añadir y editar sugerencias.





## Funcionalidades disponibles

- Registrar/Logear usuarios
- Crear, Eliminar y Editar Suggestions
- Crear Comentarios
- Responder a Comentarios


## Installation

- Instalar dependencias del "package.json" en las carpetas "client" y "server":

```bash
  npm install
```

- Para inicializar el server y client:

```bash
  npm run dev
```
    
## Environment Variables

Para que el proyecto funcione vas a necesitar las siguientes variables de entorno en un archivo .env 

- Server:

`MONGO_URI`

`jwtPrivateKey`

`CLOUD_NAME`

`API_KEY`

`API_SECRET`

- Client:

`VITE_API_URL`


## Endpoints

* POST: /api/users/signup {PUBLIC} - Registrar usuario
* POST: /api/users/signin {PUBLIC} - Logear usuario

* GET: /api/suggestions {PUBLIC} - Obtener todas las suggestions
* GET: /api/suggestions/:suggestionID {PUBLIC} - Obtener una suggestion
* GET: /api/suggestions/?upvotes=asc {PUBLIC} - Ordenar por votos
* GET: /api/suggestions/?category=bugs {PUBLIC} - Filtrar por categoria
* GET: /api/suggestions/?status=inprogress {PUBLIC} - Filtrar por estado

* POST: /api/suggestions `PAYLOAD BODY` {AUTH} - Añadir una suggestion
* POST: /api/suggestions/:suggestionID/comments `PAYLOAD BODY` {AUTH} - Añadir un comentario
* PUT: /api/suggestions/comments/:commentID `PAYLOAD BODY` {AUTH} - Responder un comentario
* PUT: /api/suggestions/:suggestionID `PAYLOAD BODY` {AUTH} - Actualizar una suggestion
* PUT: /api/suggestions/votes/:suggestionID `PAYLOAD BODY` {AUTH} - Votar una suggestion

* DELETE: /api/suggestions/:suggestionID {AUTH ADMIN}

