""" 2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros serviran para definir 
un intervalo. La funcion del algoritmo sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m]. """
print("Ingrese dos números para crear un intervalo, del cual se sumaran todos los números pares ")
n = int(input("Ingrese el numero menor del intervalo: "))
m = int(input("Ingrese el numero mayor del intervalo: "))
i = n
total = 0
for n in range(n, m + 1):
    if n % 2 == 0:
        total = total + n
        
print(total) 
