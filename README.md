# ESPAÑOL
# Ugames gamming eccomerce

Éste proyecto trata de un eccomerce orientado a gamming y productos tecnológicos.
Se decidió escribir el código entero en inglés.
## Preview de la App
<!-- ![] (https://media.giphy.com/media/CguG2sEjw6vj9PFNOy/giphy.gif) No funciona -->
<!-- ![ugames] (https://drive.google.com/file/d/1qosZQx-Ju_IeUgsNzFt208mBIduIvKTF/view?usp=sharing) No funciona -->
<img src="https://media.giphy.com/media/CguG2sEjw6vj9PFNOy/giphy.gif" data-canonical-src="https://media.giphy.com/media/CguG2sEjw6vj9PFNOy/giphy.gif" width="600" height="400" />


## Dependencias instaladas
1. React-bootstrap
2. Styled-components
3. React-router-dom
4. Firebase con Firestore

- React-bootstrap fue descargada para agregar componentes UI prefabricados, permitiendome de manera rápida construir el sitio 
- Styled components, para ir familiarizandome lentamente con la idea de tomar un componente preexistente (i.e.: como un Container de React-bootstrap) y personalizarlo. Eventualmente, me gustaría más componentes.
-React-router-dom, para ir haciendo el ruteo de las vistas.
- Firebase y Firestore están siendo utilizadas para levantar una BDD no relacional de forma rápida, segura y sencilla y mantener éste proyecto "serverless", o, mejor dicho, con un server provisto por Google y no hardcodeado en, por ejemplo NodeJS (aunque no se descarta que en el futuro, se podría pensar una implementación Full Stack en MERN).



### Correr la App
1. Abrir la terminal y escribir "npm i" o "npm install" para instalar las dependencias.
2. Ejecutar `npm start`

La app correrá por default en el modo de desarrollo en el  [http://localhost:3000](http://localhost:3000).

La página se actualizará/recargará sola si hacés alguna edición.
Además, está **eslint** activado y es posible que aparezcan "errores" o, mejor dicho, advertencias (warnings) en la consola.
Tené presente que éste proyecto trabaja con **proptypes**.

### Observaciones sobre el estado actual del State.
A medida que crece la app, el uso -y abuso?- del useState hook se vuelve evidente (i.e: prop drilling, componente que manejan 3 o más states, etc).

EDIT: Finalmente, se terminó implementando useContext para ganar facilidad, estructura y organización en el manejo del state global del carrito .

# ENGLISH
# Ugames gamming eccomerce

This project is an eccomerce orientated to gamming and tech products.
All code is written in english.


## Installed dependencies
1. React-bootstrap
2. Styled-components
3. React-router-dom
4. Firebase con Firestore

- React-bootstrap was implemented in order to make UI pre-made components, letting me code faster as I was building my app. 
- Styled components, because I wanted to start getting familiarized with this technology (i.e.: como un Container de React-bootstrap) and learn how to make my own custom components.Eventually, I would like to make more styled-components of my own.
- React-router-dom, to make the routes for the different views/pages.
- Firebase y Firestore are been used to start a fast, secure and easy-to-mantain Non-relational DB and make this app "serverless", or, to be honest, make/use a server provided by a third part such as Google and not harcode my own server with, for example, NodeJS (though it's to be consider in the future to build my own Full Stack App with MERN).


### Run the App
1. Open terminal and write  "npm i" or "npm install" to install all dependencies.
2. Execute `npm start`

The app will run by default in development mode at [http://localhost:3000](http://localhost:3000).

The app will update/reload if you make any edition and save it while server is running.
Besides, **eslint** is activated and it's possible that you may see "errors", or, talking properly, warnings in the console.
Keep in mind that this project uses **proptypes**.

### Observations about current State.
While the app grows larger and bigger, the use and abuse of useState hook will become obvious (i.e: prop drilling, components that manage more than 3 states, etc). 

EDIT: Finally, useContext hook has been implemented in order to gain structure, organization and better flow of the cart global state management.
