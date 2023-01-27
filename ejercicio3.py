""" 3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 despues debe 
calcular el factorial de este numero e imprimirlo en pantalla."""

print("Ingrese un número entero positivo mayor a 10 y menor a 15, osea sin incluir estos dos números, del cual desee conocer el factorial")

n = int(input("Ingrese el número en el intervalo solicitado: "))
x = 1
f= 0
if n <= 10 or n >= 15 :
    while n <= 10 or n >= 15 :
        print("Ingrese un número mayor a 10 y menor a 15, osea sin incluir estos dos números")
        n = int(input("Ingrese el número en el intervalo solicitado: "))
if n > 10 and n < 15:
    while n >= 2:
        f = n * (n-1)
        x = f * x
        n -= 2
        f= 0
print(x)