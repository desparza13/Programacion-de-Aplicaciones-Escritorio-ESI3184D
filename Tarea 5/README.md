# CRUD tareas
### Descripción
CRUD tareas consiste en el desarrollo de una API mediante Node + Express que permita al usuario administrar tareas a través de una base de datos en MongoDB.

Como administrador de tareas, el usuario debe tener la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente. 

Para ello, se encuentran disponiblres los endpoints necesarios para que el usuario tenga la capacidad de realizar las acciones (get, post, put) correspondientes desde http://localhost:3000/swagger/ tras correr los comandos
npm install
y npm run start o npm run dev

Sustituir la cadena de conexión en un archivo .env siguiendo el ejemplo disponible en example.env

Cada tarea deberá contar con las siguientes propiedades:
titulo
descripcion
status
fecha
