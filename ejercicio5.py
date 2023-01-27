"""""5. Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y luego imprima todos los numeros 
primos que hay antes de ese nuemro ingresado."""""

numero = 0
divisor = 0
numero = int(input("Ingrese un número entero positivo mayor a 100: "))
while numero <= 100:
    numero = int(input("Ingrese un número entero positivo mayor a 100: "))
for i in range(2, numero):
    divisor = 2
    bandera = True
    while bandera and divisor < i:
        if i % divisor == 0:
            bandera = False
        else: 
            divisor += 1
    if bandera:
        print(i, " es primo.")



