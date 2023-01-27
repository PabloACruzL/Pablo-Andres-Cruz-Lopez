""""" Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

	1. Sumar 2 numeros
	2. Restar 3 numeros
	3. Multiplicar 2 numeros
	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
	0. Salir de la calculadora
Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.  """""

num1 = 0
num2 = 0
operaciones = 0
opcion = 0
def suma(p1, p2):
    return print(p1 + p2)

def resta(p1 ,p2):
    return print( p1- p2)

def multiplicacion(p1, p2):
    return print(p1 * p2)

def division(p1, p2):
    if p2 == 0 :
        print("Indeterminado")
    else:
        return print(p1 / p2) 
def salir():
    opcion = 0
    print("Hasta luego!")   


operaciones = {
    1: suma,
    2: resta,
    3: multiplicacion,
    4: division,
    0: salir

}    

print("Calculadora de operaciones básicas: ")
print("1. Sumar 2 numeros \n 2. Restar 3 numeros \n 3. Multiplicar 2 numeros \n 4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) \n 0. Salir de la calculadora")    
opcion = int(input("Elija la operación según el numero que corresponda: "))         
while opcion != 0:
    
    while opcion < 1 or opcion > 4:
        print("El número ingresado no es una opción válida: ")
        opcion = int(input("Elija la operación según el numero que corresponda: "))
        if opcion == 0:
            break
    
    if opcion == 0:
        break
   
    num1 = float(input("Ingrese el primer número: "))
    num2 = float(input("Ingrese el segundo número: "))

    print("\n")
    operaciones.get(opcion)(num1, num2)
    
    
    print("\n")
    print("Calculadora de operaciones básicas: ")
    print("1. Sumar 2 numeros \n 2. Restar 3 numeros \n 3. Multiplicar 2 numeros \n 4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) \n 0. Salir de la calculadora")    
    opcion = int(input("Elija la operación según el numero que corresponda: ")) 
