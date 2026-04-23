console.log("Conexion exitosa...");

/*
=================
1.¿Que es una conexion es JS?
=================
Una condicion nos permite tomar desiciones en el
codigo. Separando dos caminos elsi(if) y el no(else).

estructura basica:(sintaxis)

if(condicion) {

}


*/

//Ejemplo 1: (numerico)
let edad = 18;

if(edad >= 18) {
    console.log("Eres mayor de edad");
}

//Ejemplo2: dos caminos posibles
let temperatura = 10;

if(temperatura > 20){
console.log("Hace calor");
} else {
    console.log("Hace frio");
}

//Ejemplo 3: IF - ELSE IF - ELSE

let nota = 5.5;

if (nota >=6.0){
    console.log("Excellent");
}else if (nota >= 4.0){
    console.log("Aprobado, puedes mejorar!");
}else {
    console.log("Reprobado, estudia más");
}

//Ejemlo4: Condicciones con STRING
let nombre=("Pepito");

//Comparacion exacta(===)
if(nombre==="Pepito"){
    console.log("hola;" + nombre)
}else {
    console,log("Tu no eres Pepito")
}

/*
OPERADORES DE COPARACION

>mayor que
<menor que
>mayor o igual
>menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/ 
//Ejemplo de distinto
let num1 = 10;
let num2 = 5;
if(num1 !== num2) {
    console.log(`El numero ${num1} es distinto que ${num2}`)
}else {
    console.log("Son iguales!")
}