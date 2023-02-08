/*
        En el instituto TURBOCOEX se tiene una cantidad N de estudiantes, de los cuales se desea registrar el nombre, código y nivel
        (Beginner, Junior , Senior) se debe verficar que no se creen códigos duplicados para los estudiantes que se registren.
        Además de los datos solicitados se requiere registrar 3 notas para cada estudiante. Se debe calcular y mostar el promedio de 
        las notas por cada estudiante junto con un mensaje de "aprobó" o "reporobó" y el promedio general del grupo de estudiantes. 
        Para saber si aprobó, su promedio debe ser superior o igual a 3.5 (validar las notas en un rango de 0 a 5) 
        
        */

        //Definición de variables
        let  estudiantes = {
            nombre: "",
            codigo: "",
            nivel: "",
            notas: [
                nota1 = 0,
                nota2= 0,
                nota3= 0,

            ],
            promedioNotas: 0,
            ApruebaDesaprueba: ""                
        }
       
        let notas = [], listadoEstudiantes = [];
        let cantidadEstudiantes, codigo, bandera, opcion,banderaUno;
        bandera = true;

        //Definición de funciones

        



        while(bandera){
            opcion = parseInt(prompt("Bienvenido al sistema de notas \n Menu \n 1. Definir cantidad de estudiantes. \n 2. Registrar datos de los estudiantes \n 3. Mostrar listado estudiantes \n 4.Registrar notas estudiantes \n 5. Imprimir notas estudiantes. \n 6. Salir"));
            switch(opcion){
                case 1:
                    cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes que desea registrar en el sistema de notas: "));           
                    break;

                case 2:
                    for(let i= 0; i < cantidadEstudiantes; i++){
                        estudiantes.nombre = prompt("Ingrese el nombre del estudiante: ")
                        codigo= prompt("Ingrese el código del estudiante")
                
                        Object.values(estudiantes).forEach(Element => {
                            while(Element === codigo){
                                alert("¡El código ingresado ya existe!")
                                codigo = prompt("Ingrese el código nuevamente")
                            }

                        })

                        estudiantes.codigoEstudiante = codigo

                        estudiantes.nivel = prompt("Ingrese el nivel del estudiante, este debe ser, beginner, junior o senior");

                        listadoEstudiantes.push(estudiantes);
                        
                        

                    }
                    break;
                
                
                case 3:
                    
                    console.log(listadoEstudiantes);
                   
                
                    break;

                case 4:
                    alert("Deberá ingresar 3 notas por cada estudiante  ")
                    cantidadNotas = cantidadEstudiantes;
                    nota1 =0;
                    nota2 = 0;
                    nota3 = 0;

                    if(cantidadNotas == 0){
                        alert("Regrese al menú principal e ingrese la cantidad de estudiantes que desea ingresar en el sistema para luego ingresar sus notas:");
                        break;
                    }
                    for(let i= 0; i < cantidadNotas; i++){

                        banderaUno = true;
                        nota1 = parseFloat(prompt("Ingrese la nota 1: "));
                        if (nota1 >= 0.0 && nota1 <= 5.0){
                            banderaUno = false    
                        }else {
                            alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
                            banderaUno = true
                        }
                        while(banderaUno){
                            nota1 = parseFloat(prompt("Ingrese el valor de la nota del primer examen parcial: "));
                                if(nota1 >= 0.0 && nota1 <= 5.0){
                                    banderaUno = false;
                                }
                        }
                        nota2 = parseFloat(prompt("Ingrese la nota 2: "));
                        if (nota2 >= 0.0 && nota2 <= 5.0){
                            banderaUno = false    
                        }else {
                            alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
                            banderaUno = true
                        }
                        while(banderaUno){
                            nota2 = parseFloat(prompt("Ingrese el valor de la nota del primer examen parcial: "));
                                if(nota2 >= 0.0 && nota2 <= 5.0){
                                    banderaUno = false;
                                }
                        }
                        nota3 = parseFloat(prompt("Ingrese la nota 3: "));

                        if (nota3 >= 0.0 && nota3 <= 5.0){
                            banderaUno = false    
                        }else {
                            alert("ERROR. La nota ingresada no corresponde a un valor que se encuentre dentro del rango válido. ")
                            banderaUno = true
                        }
                        while(banderaUno){
                            nota2 = parseFloat(prompt("Ingrese el valor de la nota del primer examen parcial: "));
                                if(nota2 >= 0.0 && nota2 <= 5.0){
                                    banderaUno = false;
                                }
                        }

                        
                        notas.push(nota1, nota2, nota3);
                        estudiantes.notasEstudiantes = notas;
                        
                        notas = [];



                    }
                    console.log(estudiantes);
                    break;


                case 5: 
                    
                case 6:
                bandera = false;

            
        }

        

            
            
        }