""""" 6. Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

	1. Si el precio es mayor a $100 el 10%
	2. Si el precio es mayor a $100 y menor a $200 el 20%
	3. Si el precio es mayor a $200 el 25%

Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la cantidad de productos y el precio de 
cada uno. El algoritmo tambien debe imprimir en pantalla el calculo de los descuentos.  """""
 
cantidadProductos = 0
precio = 0
descuento = 0
total = 0

print("Calculo del descuento según su precio: ")

cantidadProductos = int(input("Ingrese la cantidad de productos: "))

for i in range(0 , cantidadProductos):
    precio = float(input("Ingrese el precio del producto: "))
    
    if precio < 100 :
        descuento = precio * 0.10
        print (descuento, "dolares de descuento por el producto ingresado")
        total += descuento
    elif precio >= 100 and precio < 200:
        descuento = precio * 0.20 
        print(descuento , " dolares de descuento por el producto ingresado")
        total += descuento
    elif precio >= 200:
        descuento = precio *0.25
        print(descuento, " dolares de descuento por el producto ingresado.")
        total += descuento
    
print(total, " dolares es la cantidad de dinero en descuentos de los productos comprados.")

