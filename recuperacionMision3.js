let estudiantes = new Object();
        let listadoEstudiantes = new Array();
        estudiantes = {
            nombreEstudiante: "",
            codigoEstudiante: "",
            notas:{
            notaMision1: "",
            notaMision2: "",
            notaMision3: "",
            notaPruebaFinal: ""
            },
            promedio: 0,
            
        }
        listadoEstudiantes = []
        let listadoCodigos =[];
        
       


        
        let cantidadEstudiantes, bandera, opcion,banderaUno, variableNombre, variableCodigo, nota1, nota2, nota3, notaFinal,
        banderaValidacionCodigo,mejorNotaMision1, mejorNotaMision2, mejorNotaMision3, nombreMejorNotaMision1, nombreMejorNotaMision2,
        nombreMejorNotaMision3, variablePromedio;
        bandera = true;
        banderaValidacionCodigo = false;
        mejorNotaMision1 = 0;
        mejorNotaMision2 = 0;
        mejorNotaMision3 = 0;

        
        agregarEstudiantes = (cantidadEstudiantes, nombre, codigo)=>{
            
            for(let i= 0; i < cantidadEstudiantes; i++){
                   
                variableNombre = prompt(`Ingrese el nombre del estudiante ${i + 1 }`);
                while(variableNombre === ""){
                    alert("El nombre del talento no puede estar vacío.")
                    variableNombre = prompt(`Ingrese el nombre del estudiante ${i + 1 }`);
                }
                estudiantes.nombreEstudiante = variableNombre;
                variableCodigo= prompt(`Ingrese el código del estudiante ${estudiantes.nombreEstudiante}`);
                

                listadoCodigos.forEach(Element => {
                    while(Element === variableCodigo){
                        alert("¡El código ingresado ya existe!")
                        variableCodigo = prompt(`Ingrese el código de ${estudiantes.nombreEstudiante} nuevamente.`)

                    }
                });               
                estudiantes.codigoEstudiante = variableCodigo;
                listadoCodigos.push(estudiantes.codigoEstudiante);
                
                listadoEstudiantes.push(estudiantes);
                   
                /*
                Object.values(estudiantes).forEach(Element => {
                    while(Element === codigo){
                        alert("¡El código ingresado ya existe!")
                        codigo = prompt("Ingrese el código nuevamente")
                    }
                    estudiantes.codigoEstudiante =codigo
                                           
                })

                */
                estudiantes = {
                    nombreEstudiante: "",
                    codigoEstudiante: "",
                    notas:{
                        notaMision1: "",
                        notaMision2: "",
                        notaMision3: "",
                        notaPruebaFinal: "",
                    },
                    promedio: 0,            
                }

               
                        
            } 

            console.log(listadoEstudiantes);
            console.log(listadoCodigos);
            

        }

        


        while(bandera){

            opcion = parseInt(prompt("Bienvenido al sistema de Coex \n Menu \n 1. Definir cantidad de estudiantes." 
                    + "\n 2. Registrar datos de los estudiantes. \n 3. Registrar nota mision 1. \n 4. Registrar nota misión 2  " 
                    + "\n 5. Registrar nota misión 3. \n 6. Registrar prueba de nivel final."
                    + "\n7. Mostrar nombre y nota del talento con la mejor nota en la Misión uno."
                    + "\n 8. Mostrar nombre y nota del talento con la mejor nota en la Misión dos."
                    + "\n 9. Mostrar nombre y nota del talento con la mejor nota en la Misión tres."
                    + "\n10. Mostrar el nombre y el promedio de cada talento (el promedio se obtiene de las 4 pruebas)."
                    + "\n11. Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final."
                    + "\n12. Nombre de los talentos que desarrollaron el ejercicio."
                    + "\n13. Salir."));

            switch(opcion){

                case 1:
                    if(cantidadEstudiantes!== undefined && cantidadEstudiantes !== 0){
                        alert("Ha definido una cantidad de estudiantes previamente, si desa cambiar esa cantidad, deberá salir del sistema e ingresar nuevamente");
                        break;
                    }

                    cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes que desea registrar en el sistema de notas: "));           
                    break;

                case 2:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }

                    if(listadoEstudiantes.length !== 0){
                        alert("Ya se ha ingresado los datos de la cantidad de estudiantes que previamente definió, para ingresar una"
                        +" cantidad diferente salga del sistema e ingrese nuevamente." );
                        break;
                    }

                
                    agregarEstudiantes(cantidadEstudiantes, variableNombre, variableCodigo);
                    break;

                case 3:

                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }

                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }
                    
                    if(listadoEstudiantes[0].notas.notaMision1 !== ""){
                        alert("Ya ha ingresado el valor de las notas para los estudiantes definidos previamente.")
                        break;
                    }

                    
                    for(let i = 0; i < cantidadEstudiantes; i++){
                        
                        nota1 = parseFloat(prompt(`Ingrese la nota de la misión 1 del estudiante ${estudiantes.nombreEstudiante}`));
                        if(nota1 >= 1.0 && nota1 <= 100.0){
                            banderaUno = false;
                        }
                        else{
                            alert("La nota ingresada no es un valor válido, deberá ingresar un valor entre 1.0 y 100.0");
                            banderaUno = true;
                        }
                        while(banderaUno){
                            nota1 = parseFloat(prompt(`Ingrese la nota de la misión 1 del estudiante ${estudiantes.nombreEstudiante}`));
                            if(nota1 >= 1.0 && nota1 <= 100.0){
                                banderaUno = false;
                            }
                        }
                        
                        listadoEstudiantes[i].notas.notaMision1 = nota1;
                        
                       

                    }  
                    
                  
                    
                    break;

                case 4:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }

                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }

                    if(nota1 === undefined){
                        alert("Debe ingresar la nota de la mision 1, en el menú principal escoja la opción 3.");
                        break;
                    }

                    if(listadoEstudiantes[0].notas.notaMision2 !== ""){
                        alert("Ya ha ingresado el valor de las notas para los estudiantes definidos previamente.")
                        break;
                    }


                    for(let i = 0; i < cantidadEstudiantes; i++){
                        
                        nota2 = parseFloat(prompt(`Ingrese la nota de la misión 2 del estudiante ${estudiantes.nombreEstudiante}`));
                        if(nota2 >= 1.0 && nota2 <= 100.0){
                            banderaUno = false;
                        }
                        else{
                            alert("La nota ingresada no es un valor válido, deberá ingresar un valor entre 1.0 y 100.0");
                            banderaUno = true;
                        }
                        while(banderaUno){
                            nota2= parseFloat(prompt(`Ingrese la nota de la misión 1 del estudiante ${estudiantes.nombreEstudiante}`));
                            if(nota2 >= 1.0 && nota2 <= 100.0){
                                banderaUno = false;
                            }
                        }

                        listadoEstudiantes[i].notas.notaMision2 = nota2;

                        

                    }
                    

                    break;
                case 5:

                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }

                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }

                    if(nota2 === undefined){
                        alert("Debe ingresar la nota de la mision 2, en el menú principal escoja la opción 4.");
                        break;
                    }
                    
                    if(listadoEstudiantes[0].notas.notaMision3 !== ""){
                        alert("Ya ha ingresado el valor de las notas para los estudiantes definidos previamente.")
                        break;
                    }

                    for(let i = 0; i < cantidadEstudiantes; i++){
                        
                        nota3 = parseFloat(prompt(`Ingrese la nota de la misión 3 del estudiante ${estudiantes.nombreEstudiante}`));
                        if(nota3 >= 1.0 && nota3 <= 100.0){
                            banderaUno = false;
                        }
                        else{
                            alert("La nota ingresada no es un valor válido, deberá ingresar un valor entre 1.0 y 100.0");
                            banderaUno = true;
                        }
                        while(banderaUno){
                            nota3= parseFloat(prompt(`Ingrese la nota de la misión 1 del estudiante ${estudiantes.nombreEstudiante}`));
                            if(nota3 >= 1.0 && nota3 <= 100.0){
                                banderaUno = false;
                            }
                        }

                        listadoEstudiantes[i].notas.notaMision3 = nota3;
                    
                    }
                    

                    break;

                case 6:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }

                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }

                    if(nota3 === undefined){
                        alert("Debe ingresar la nota de la mision 3, en el menú principal escoja la opción 5.");
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaPruebaFinal !== ""){
                        alert("Ya ha ingresado el valor de las notas para los estudiantes definidos previamente.")
                        break;
                    }

                    for(let i = 0; i < cantidadEstudiantes; i++){
                        
                        notaFinal = parseFloat(prompt(`Ingrese la nota de la prueba final del estudiante ${estudiantes.nombreEstudiante}`));
                        if(notaFinal >= 1.0 && notaFinal <= 100.0){
                            banderaUno = false;
                        }
                        else{
                            alert("La nota ingresada no es un valor válido, deberá ingresar un valor entre 1.0 y 100.0");
                            banderaUno = true;
                        }
                        while(banderaUno){
                            notaFinal= parseFloat(prompt(`Ingrese la nota de la misión 1 del estudiante ${estudiantes.nombreEstudiante}`));
                            if(notaFinal >= 1.0 && notaFinal <= 100.0){
                                banderaUno = false;
                            }
                        }
                        listadoEstudiantes[i].notas.notaPruebaFinal = notaFinal;

                    }




                    break;
                case 7:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }
                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }

                    if(listadoEstudiantes[0].notas.notaMision1 === "" || listadoEstudiantes[0].notas.mejorNotaMision2 === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision3 === "" || listadoEstudiantes[0].notas.notaPruebaFinal === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    
                    for(let i = 0; i < listadoEstudiantes.length; i++){
                        if(listadoEstudiantes[i].notas.notaMision1 > mejorNotaMision1){
                            mejorNotaMision1 = listadoEstudiantes[i].notas.notaMision1
                            nombreMejorNotaMision1 = listadoEstudiantes[i].nombreEstudiante;
                        }

                    }
                    alert("Se mostrará en consola el nombre del estudiante y su calificación con la mejor nota de la mision 1.")
                    console.log(`El estudiante ${nombreMejorNotaMision1} tiene la mejor calificación en la mision 1 con un puntaje de ${mejorNotaMision1}`)


                    break;
                case 8:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }
                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }

                    if(listadoEstudiantes[0].notas.notaMision1 === "" || listadoEstudiantes[0].notas.mejorNotaMision2 === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision3 === "" || listadoEstudiantes[0].notas.notaPruebaFinal === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }

                    for(let i = 0; i < listadoEstudiantes.length; i++){
                        if(listadoEstudiantes[i].notas.notaMision2 > mejorNotaMision2){
                            mejorNotaMision2 = listadoEstudiantes[i].notas.notaMision2
                            nombreMejorNotaMision2 = listadoEstudiantes[i].nombreEstudiante;
                        }

                    }
                    alert("Se mostrará en consola el nombre del estudiante y su calificación con la mejor nota de la mision 2.")
                    console.log(`El estudiante ${nombreMejorNotaMision2} tiene la mejor calificación en la mision 2 con un puntaje de ${mejorNotaMision2}`)

                    break;



                case 9:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }
                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision1 === "" || listadoEstudiantes[0].notas.mejorNotaMision2 === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision3 === "" || listadoEstudiantes[0].notas.notaPruebaFinal === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }

                    for(let i = 0; i < listadoEstudiantes.length; i++){
                        if(listadoEstudiantes[i].notas.notaMision3 > mejorNotaMision3){
                            mejorNotaMision3 = listadoEstudiantes[i].notas.notaMision3
                            nombreMejorNotaMision3 = listadoEstudiantes[i].nombreEstudiante;
                        }

                    }
                    alert("Se mostrará en consola el nombre del estudiante y su calificación con la mejor nota de la mision 3.")
                    console.log(`El estudiante ${nombreMejorNotaMision3} tiene la mejor calificación en la mision 3 con un puntaje de ${mejorNotaMision3}`)

                    break;
                case 10:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }
                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision1 === "" || listadoEstudiantes[0].notas.mejorNotaMision2 === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision3 === "" || listadoEstudiantes[0].notas.notaPruebaFinal === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }

                    alert("Se mostrará en consola el nombre de los talentos y su respectivo promedio.");
                    for(let i = 0; i < cantidadEstudiantes; i++){
                        variablePromedio = (listadoEstudiantes[i].notas.notaMision1 + listadoEstudiantes[i].notas.notaMision2 + listadoEstudiantes[i].notas.notaMision3 +listadoEstudiantes[i].notas.notaPruebaFinal)/4
                        listadoEstudiantes[i].promedio = variablePromedio
                    };
                    
                    for(let i= 0; i < cantidadEstudiantes; i++){

                        console.log(`El talento ${listadoEstudiantes[i].nombreEstudiante} tiene un promedio de: ${listadoEstudiantes[i].promedio} `)
                    };
                    // listadoEstudiantes.forEach(Element =>{
                    //     variableNombrePromedio = listadoEstudiantes[Element].nombreEstudiante
                    //     variablePromedioImpreso = listadoEstudiantes[Element].promedio
                    //     console.log(`El talento ${variableNombrePromedio} tiene un promedio de: ${variablePromedioImpreso} `)

                    // });


                    break;
                case 11:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }
                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision1 === "" || listadoEstudiantes[0].notas.mejorNotaMision2 === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision3 === "" || listadoEstudiantes[0].notas.notaPruebaFinal === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    alert("Se mostrará en consola, el nombre del talento, su codigo, y las respectivas notas de mision 1,2 y 3 y prueba final.");
                    for(let i= 0; i < cantidadEstudiantes; i++){
                        console.log(`Nombre talento : ${listadoEstudiantes[i].nombreEstudiante}, codigo: ${listadoEstudiantes[i].codigoEstudiante}, ` 
                        + `nota mision 1: ${listadoEstudiantes[i].notas.notaMision1}, nota mision 2: ${listadoEstudiantes[i].notas.notaMision2}, ` 
                        + `nota mision 3: ${listadoEstudiantes[i].notas.notaMision3}, nota prueba final: ${listadoEstudiantes[i].notas.notaPruebaFinal}`)

                    }
                    
                    
                    // listadoEstudiantes.forEach(Element =>{
                    //     console.log(`Nombre talento : ${listadoEstudiantes[Element].nombreEstudiante}, codigo: ${listadoEstudiantes[Element].codigoEstudiante}` 
                    //     + `nota mision 1: ${listadoEstudiantes[Element].notas.notaMision1}, nota mision 2: ${listadoEstudiantes[Element].notas.notaMision2}, ` 
                    //     + `nota misison 3: ${listadoEstudiantes[Element].notas.notaMision3}, nota prueba final: ${listadoEstudiantes[Element].notas.notaPruebaFinal}`)
                    // });

                    break;
                case 12:
                    if(cantidadEstudiantes === undefined || cantidadEstudiantes === 0){
                        alert("No hay una cantidad de estudiantes definida o válida, en el menú principal seleccione la primera opción.");
                        break;
                    }
                    if(listadoEstudiantes.length === 0){
                        alert("No hay estudiantes registrados, en el menú principal escoja la opción dos");
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision1 === "" || listadoEstudiantes[0].notas.mejorNotaMision2 === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    if(listadoEstudiantes[0].notas.notaMision3 === "" || listadoEstudiantes[0].notas.notaPruebaFinal === "" ){
                        alert("Debe ingresar primero las notas de los estudiantes que haya definido previamente")
                        break;
                    }
                    alert("Se mostrará en consola el nombre de los talentos que presentaron la prueba.");
                    for(let i= 0; i < cantidadEstudiantes; i++){
                        console.log(`El talento ${listadoEstudiantes[i].nombreEstudiante} presentó las pruebas.`)
                    }

                    // listadoEstudiantes.forEach(el => {
                    //     console.log(`El talento ${listadoEstudiantes[el].nombreEstudiante} presentó las pruebas.`)
                    // })
                    break;
                case 13:
                    bandera = false;
                    alert("Ha salido del sistema, hasta luego.")
                    break;


            }

        }