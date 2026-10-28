# Simuladores de JavaScript - Coderhouse

Este repositorio reúne tres preentregas de un simulador interactivo hecho con JavaScript. Cada entrega está en su propia carpeta y muestra una práctica distinta: cálculo de edad, acceso con contraseña y tabla de multiplicar, y cálculo del promedio y estado académico de un estudiante.

## Cómo ejecutar

No se necesita instalar dependencias ni iniciar un servidor. Abre en un navegador el archivo `index.html` de la entrega que quieras ejecutar. Puedes hacerlo con doble clic desde el explorador de archivos o arrastrando el archivo a una ventana del navegador.

Por ejemplo, para iniciar la tercera entrega, abre:

`Clase_3_PreEntrega/index.html`

El programa utiliza cuadros de diálogo del navegador (`prompt` y `alert`) para solicitar datos y mostrar los resultados. Permite que se ejecuten las ventanas emergentes del sitio/navegador.

## Estructura del proyecto

```text
coder_house/
├── Clase_1_PreEntrega/
│   ├── index.html
│   └── js/
│       └── main.js
├── Clase_2_PreEntrega/
│   ├── index.html
│   └── js/
│       └── main.js
└── Clase_3_PreEntrega/
    ├── index.html
    └── js/
        └── main.js
```

En cada entrega, `index.html` es la página que se abre en el navegador y carga `js/main.js`, donde está la lógica del simulador. Las entregas son independientes; puedes ejecutar cualquiera directamente.

## Qué hace cada entrega

### Clase 1 - Preentrega

Solicita nombre, apellido y año de nacimiento. Calcula la edad restando el año ingresado al año actual definido en el código (2026) y muestra un saludo con el resultado.

### Clase 2 - Preentrega

Solicita una contraseña con un máximo de tres intentos. La contraseña configurada en el código es `A1b2C3`. Si es correcta, solicita un número y muestra su tabla de multiplicar del 1 al 10. Si se agotan los intentos, informa que no se concedió el acceso.

### Clase 3 - Preentrega

Solicita el nombre de un estudiante y la cantidad de notas; luego pide cada nota, calcula el promedio y muestra si está aprobado o reprobado. La nota mínima para aprobar está definida en el código como `3.5`.
## Descripción de las carpetas

### `Clase_1_PreEntrega/`

Contiene la primera versión del simulador, enfocada en practicar la entrada de datos y operaciones básicas. El archivo `index.html` presenta la página y carga `js/main.js`; el script pregunta el nombre, apellido y año de nacimiento, calcula la edad y muestra el resultado.

### `Clase_2_PreEntrega/`

Contiene la segunda versión, que practica el uso de ciclos y condicionales. Su script valida una contraseña con hasta tres intentos y, si es correcta, pide un número y muestra su tabla de multiplicar del 1 al 10.

### `Clase_3_PreEntrega/`

Contiene la tercera versión, dedicada a trabajar con funciones, ciclos y cálculos. Su script pide el nombre de un estudiante y sus notas, calcula el promedio y determina si aprobó según la nota mínima configurada.

En cada una de estas carpetas, el subdirectorio `js/` agrupa el código JavaScript y `main.js` contiene la lógica ejecutada al abrir el `index.html` correspondiente.

