//Guardar en una variable el valoe del contador
var contador = 0

//Mostrar el valor del contador en el html
function mostrarValor(){
    //capt html del contador
 document.querySelector(".contador")
 //actualizar contador
 .innerHTML = contador
}

//Declarar la función sumar
function sumar(){
    contador = contador + 1
    mostrarValor()
}

//Declarar fx restar
function restar(){
    contador= contador - 1
    mostrarValor()
}

//Reiniciar el contador
function reiniciar(){
    contador = 0
    mostrarValor()
}