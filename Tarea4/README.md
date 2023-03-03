La aplicación NewsApp es una aplicación desarrollada mediante Node + Express
y permite al usuario buscar y listar noticias a través de https://newsapi.org/

### Tecnologías y librerias
- Node 
- Express
- Express Handlebars
- Axios
- Sass
- JavaScript, CSS

### APIs de terceros
Se utilizó la API de terceros https://newsapi.org/

### Comandos
Antes de utilizar la página web se deben de ejecutar los siguientes comandos
- npm init
- npm i express
- npm i express-handlebars
- npm i sass
- npm i nodemon
- npm i axios
Posteriormente hay dos opciones
Dev: que se utiliza en un ambiente de desarrollo donde se quiere leer constantemente los cambios en los archivos. En el se ejecuta el siguiente comando para convertir los estilos sass a css, y leer constantemente los cambios en estos.
    npm run styles:dev
Después se ejecuta para iniciar la app y poder visualizarla, y leer constantemente los cambios
    npm run dev

Usuario: como usuario puedes usar los siguientes comandos
    npm run styles
    npm run start