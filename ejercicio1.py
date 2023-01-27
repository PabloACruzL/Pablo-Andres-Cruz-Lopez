""" 1. Haga la sucesion de Fibonacci """
n = int(input("Ingrese el número de la sucesión de fibonacci que desea conocer:"))
x = 0
y = 1
z = 0
print(x)
print(y)

for i in range(1, n):
    z = x + y
    print(z)
    x = y
    y = z
    