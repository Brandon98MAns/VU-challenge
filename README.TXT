# VU CHALLENGE

Este proyecto contiene pruebas automatizadas para el servicio JSONPlaceholder a nivel de UI y Api. Se eligio Cypress como framework de automation utilizando JavaScript como lenguaje 
para el mismo. Se eligio el mencionado entorno debido a su facil configuracion y versatilidad para  el desarrollo de pruebas e2e.

## Requisitos Previos
- Node.js instalado
- Cypress instalado (`npm install`)

## Ejecutar las Pruebas
El usuario podra optar por ejecutar  solo una o varias pruebas, o todas al mismo tiempo. A su vez la ejecucion puede ser por CLI o terminal.
EJECUCION POR TERMINAL:
1. Para correr la suite completa (todas las pruebas), se debe escribir en la terminal: `npx cypress run`
2. Para correr un  solo archivo, se debe escribir en la terminal: `npx cypress run --spec "cypress/seleccionar/seleccionar/"nombre-del-spec.cy.js"

EJECUCION POR CLI
1. Abrir la terminal del proyecto e insertar el siguiente comando: "npx cypress open"
2. Se abrirá una ventana en el navegador donde se podra ejecutar cada uno de los test que se encuentran dentro de la carpeta `/cypress/e2e.
Tener en consideracion que para esto, se debe instalar Cypress en el ordenador. 

## Estructura del Proyecto
- cypress/integrations: Contiene las carpetas para cada seccion solicitada con sus respectivos metodos por separado. De esta manera se puede ejecutar como una coleccion de Postman.
- cypress/ui: Contiene pruebas para la interfaz de usuario.
