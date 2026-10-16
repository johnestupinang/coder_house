const contrasenia = "A1b2C3"

let numeroIntentos = 3

let accesoPermitido = false

while (numeroIntentos > 0) {

    let contraseniaIngresada = prompt("Ingresa tu contraseña")

    if (contraseniaIngresada == contrasenia) {
        alert("Contraseña correcta, bienvenido!")
        numeroIntentos = 0
        accesoPermitido = true
    } else {
        numeroIntentos = numeroIntentos - 1;
        alert("Contraseña incorrecta, te quedan " + numeroIntentos + " intentos")
    }

    
}

if (accesoPermitido) {
    alert("Vamos a multiplicar hasta 10, ingresa un número para multiplicar")

    let numero = parseInt(prompt("Ingresa un número"))

    for (let i = 1; i <= 10; i++) {
        alert(numero + " x " + i + " = " + (numero * i))
    }
} else {
    alert("No te quedan intentos, vuelve a intentarlo más tarde")
}


