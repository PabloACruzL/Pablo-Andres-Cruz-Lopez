/* En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota de cada estudiante. Para calcular la nota definitiva 
de un estudiante y saber si aprueba, se toma en cuenta las notas de la siguiente manera:
• El promedio de las notas de 3 Exámenes que corresponde al 55%
• El promedio de las notas de 2 Trabajos que corresponde al 15%
• La nota del examen final que será el 20% 
• El promedio de la nota de autoevaluación y co-evaluación realizada por el estudiante y el profesor respectivamente que será del 10%.

Realice un programa que permita registrar las notas que deben estar en un rango de 0-5. En caso de que una de las notas, 
se encuentre por fuera de este rango, se debe mostrar un mensaje que indique error.
Luego, debe evaluar, según la nota definitiva obtenida por el estudiante, e informar el nivel en el que se encuentra  
y si aprueba el curso.
Para aprobar el curso la nota definitiva debe ser igual o superior a 3.
Los niveles que los estudiantes pueden alcanzar son los siguientes:
Nivel      Rango
Superior  4.7 a 5.0
Alto      4.0 a 4.6
Básico    3.0 a 3.9
Bajo      2.0 a 2.9
Muy bajo  0 a 1.9

Evalúe los requerimientos de la situación planteada y determine las
variables y operaciones y condicionales requeridas para dar solución al
mismo y escriba él código.

*/

alert("Sistema para calculo de nota final de curso");
alert("Ingrese a continuación las notas según se vayan solicitando, los valores deben estar entre 0.0 y 5.0, de lo contrario" 
+ "el sistema rechazará la nota y le pedirá que ingrese el valor nuevamente");
let nota1, nota2, nota3, notaTrabajo1, notaTrabajo2, notaExamenFinal, autoevaluacion, coevaluacion, notaFinal;
let nombre, nivel;
let bandera;

nombre = prompt("Ingrese el nombre de estudiante: ")

// Ingreso y validación del valor de la primera nota parcial
nota1 = parseFloat(prompt("Ingrese el valor de la nota del primer examen parcial: "));
if (nota1 >= 0.0 && nota1 <= 5.0){
    bandera = false    
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    nota1 = parseFloat(prompt("Ingrese el valor de la nota del primer examen parcial: "));
    if(nota1 >= 0.0 && nota1 <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la segunda nota parcial
nota2 = parseFloat(prompt("Ingrese el valor de la nota del segundo examen parcial: "));
if (nota2 >= 0.0 && nota2 <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    nota2 = parseFloat(prompt("Ingrese el valor de la nota del segundo examen parcial: "));
    if(nota2 >= 0.0 && nota2 <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la tercera nota parcial
nota3 = parseFloat(prompt("Ingrese el valor de la nota del tercer examen parcial: "));
if (nota3 >= 0.0 && nota3 <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    nota3 = parseFloat(prompt("Ingrese el valor de la nota del tercer examen parcial: "));
    if(nota3 >= 0.0 && nota3 <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la nota del primer trabajo
notaTrabajo1 = parseFloat(prompt("Ingrese el valor de la nota del primer trabajo: "));
if (notaTrabajo1 >= 0.0 && notaTrabajo1 <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    notaTrabajo1 = parseFloat(prompt("Ingrese el valor de la nota del primer trabajo: "));
    if(notaTrabajo1 >= 0.0 && notaTrabajo1 <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la nota del segundo trabajo
notaTrabajo2 = parseFloat(prompt("Ingrese el valor de la nota del segundo trabajo: "));
if (notaTrabajo2 >= 0.0 && notaTrabajo2 <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    notaTrabajo2 = parseFloat(prompt("Ingrese el valor de la nota del segundo trabajo: "));
    if(notaTrabajo2 >= 0.0 && notaTrabajo2 <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la nota del examen final
notaExamenFinal = parseFloat(prompt("Ingrese el valor de la nota del examen final: "));
if (notaExamenFinal >= 0.0 && notaExamenFinal <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    notaExamenFinal = parseFloat(prompt("Ingrese el valor de la nota del examen final: "));
    if(notaExamenFinal >= 0.0 && notaExamenFinal <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la nota de la autoevaluacion

autoevaluacion = parseFloat(prompt("Ingrese el valor de la nota de la autoevaluación:  "));
if (autoevaluacion >= 0.0 && autoevaluacion <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    autoevaluacion = parseFloat(prompt("Ingrese el valor de la nota de la autoevaluación:  "));
    if(autoevaluacion >= 0.0 && autoevaluacion <= 5.0){
        bandera = false;
    }
}

// Ingreso y validación del valor de la nota la co-evaluación
coevaluacion = parseFloat(prompt("Ingrese el valor de la nota de la co-evaluación: "));
if (coevaluacion >= 0.0 && coevaluacion <= 5.0){
    bandera = false
}else {
    alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
    bandera = true
}
while(bandera){
    coevaluacion = parseFloat(prompt("Ingrese el valor de la nota de la co-evaluación: "));
    if(coevaluacion >= 0.0 && coevaluacion <= 5.0){
        bandera = false;
    }
}

notaFinal =(((nota1 +nota2 +nota3)/ 3) *0.55) + (((notaTrabajo1 + notaTrabajo2)/2) *0.15 )
            +  (notaExamenFinal * 0.20) + (((autoevaluacion + coevaluacion)/2)* 0.10);

if(notaFinal > 4.6 && notaFinal <= 5.0){
    nivel = " aprueba el curso y su nivel es Superior";
}else if(notaFinal > 3.9 && notaFinal <= 4.6){
    nivel = " aprueba el curso y su nivel es Alto ";
}else if(notaFinal >= 3.0 && notaFinal <= 3.9){
    nivel = " aprueba el curso y su nivel es Básico";
}else if(notaFinal >1.9 && notaFinal < 3.0){
    nivel = " No aprueba el curso y su nivel es Bajo";
}else if(notaFinal >= 0.0  && notaFinal <= 1.9){
    nivel = " No aprueba el curso y su nivel es Muy Bajo";
}


alert("El estudiante: " + nombre + " registra la nota final: " + notaFinal +   nivel );