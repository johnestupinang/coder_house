const ANIO_ACTUAL = 2026
let nombre = prompt("Ingresa por favor tu nombre")
let apellido = prompt("Ingresa por favor tu apellido")
let anioNacimiento = parseInt(prompt("Ingresa el año en el que naciste"))
let edad = ANIO_ACTUAL - anioNacimiento
alert("Hola: " + nombre + " " + apellido + ", tu edad es: " + edad)