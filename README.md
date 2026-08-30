API de Tareas

Esta es una API REST sencilla para administrar tareas. Fue creada con Node.js y Express.

La aplicación no incluye una interfaz gráfica. Las funciones de crear, listar, actualizar y eliminar tareas se realizan mediante peticiones HTTP.

Funcionalidades

La aplicación permite:
Crear tareas
Listar tareas
Actualizar tareas
Eliminar tareas

Requisitos:
Tener Node.js instalado
Tener Docker instalado para ejecutarla en un contenedor
Ejecutar la aplicación localmente

Primero instalar las dependencias:
npm install
Después iniciar la aplicación:
npm start


La aplicación se ejecuta en: http://localhost:3000

Para listar las tareas: http://localhost:3000/tasks

Si aparece: []
significa que la aplicación funciona correctamente, pero todavía no hay tareas registradas.

Endpoints

Listar tareas

GET /tasks

Crear tarea

POST /tasks

Ejemplo:
{
  "titulo": "Hacer tarea"
}


Actualizar tarea

PUT /tasks/1

Ejemplo:
{
  "titulo": "Terminar tarea",
  "completada": true
}

Eliminar tarea

DELETE /tasks/1

Ejemplos desde PowerShell

Crear una tarea:
Invoke-RestMethod -Method Post -Uri http://localhost:3000/tasks -ContentType "application/json" -Body '{"titulo":"Hacer tarea"}'

Actualizar una tarea:
Invoke-RestMethod -Method Put -Uri http://localhost:3000/tasks/1 -ContentType "application/json" -Body '{"titulo":"Tarea terminada","completada":true}'

Eliminar una tarea:
Invoke-RestMethod -Method Delete -Uri http://localhost:3000/tasks/1

Ejecutar con Docker
Construir la imagen:

docker build -t todo-api:1.0 .

Ejecutar el contenedor:
docker run --rm -p 3000:3000 todo-api:1.0

Después se puede acceder a: http://localhost:3000/tasks

Docker Hub

La imagen fue publicada con la versión 1.0.

marvinio173/todo-api:1.0

URL pública:
https://hub.docker.com/r/marvinio173/todo-api

Repositorio

Código fuente: https://github.com/Marvin-Juarez/Tarea_4_API

Uso de Inteligencia Artificial

Durante el desarrollo utilicé ChatGPT como apoyo para resolver dudas y entender algunos pasos.

Prompts utilizados:
"Ayúdame a crear una API REST sencilla de tareas con Node.js y Express."

Me ayudó a crear la estructura inicial y los endpoints de la aplicación.
"Explícame cómo crear un Dockerfile para esta aplicación."

Me ayudó a entender cómo construir y ejecutar la aplicación dentro de Docker.
"Ayúdame a entender los problemas que encontró Sonar."

Me ayudó a identificar qué cambios podía hacer para mejorar la calidad del código.
"Trivy encontró vulnerabilidades HIGH en mi imagen Docker. ¿Cómo puedo corregirlas?"

Me ayudó a revisar la imagen base y hacer cambios para reducir las vulnerabilidades.

Reflexión final

Durante esta actividad aprendí cómo llevar una aplicación sencilla por diferentes pasos antes de publicarla.
Al principio tuve algunos problemas para hacer funcionar Docker porque necesitaba configurar WSL.
Sonar encontró varios problemas en el código y pude corregir algunos de ellos.
También utilicé Trivy para revisar la seguridad de la imagen y encontré vulnerabilidades HIGH.
Después de realizar cambios en el Dockerfile, el nuevo análisis ya no mostró vulnerabilidades HIGH o CRITICAL.
Finalmente pude publicar la imagen con la versión 1.0 en Docker Hub.