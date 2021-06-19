# Ugames gamming eccomerce

Éste proyecto trata de un eccomerce orientado a gamming y productos tecnológicos.

## Preview de la App
<!-- ![] (https://media.giphy.com/media/CguG2sEjw6vj9PFNOy/giphy.gif) No funciona -->
<!-- ![ugames] (https://drive.google.com/file/d/1qosZQx-Ju_IeUgsNzFt208mBIduIvKTF/view?usp=sharing) No funciona -->
<img src="https://media.giphy.com/media/CguG2sEjw6vj9PFNOy/giphy.gif" data-canonical-src="https://media.giphy.com/media/CguG2sEjw6vj9PFNOy/giphy.gif" width="600" height="400" />


## Dependencias instaladas
1. React-bootstrap
2. Styled-components
3. React-router-dom

- React-bootstrap fue descargada para agregar componentes UI prefabricados, permitiendome de manera rápida construir el sitio 
- Styled components, para ir familiarizandome lentamente con la idea de tomar un componente preexistente (ie.e: como un Container de React-bootstrap) y personalizarlo. Eventualmente, me gustaría más componentes.
-React-router-dom, para ir haciendo el ruteo de las vistas.



### Correr la App
1. Abrir la terminal y escribir "npm i" o "npm install" para instalar las dependencias.
2. Ejecutar `npm start`

La app correrá por default en el modo de desarrollo en el  [http://localhost:3000](http://localhost:3000).

La página se actualizará/recargará sola si hacés alguna edición.
You will also see any lint errors in the console.
Tené presente que éste proyecto trabaja con **proptypes**.

### Observaciones sobre el estado actual del State.
A medida que crece la app, el uso -y abuso?- del useState hook se vuelve evidente (i.e: prop drilling, componente que manejan 3 o más states, etc).

Por éste motivo, se prevee que eventualmente la app utilizará useReducer y/o useContext para, justamente, ganar facilidad, estructura y organización en el manejo del state global de la app.
