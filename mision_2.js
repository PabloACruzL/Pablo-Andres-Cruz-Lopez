/**Diseñe un algoritmo que permita registrar un inventario de celulares de las siguientes marcas: Samsung, Iphone, Xiaomi, 
 * Motorola, Huawei, Oppo. El algoritmo debe permitir descontar del inventario los equipos vendidos según su marca y actualizar
 * la cantidad de teléfonos disponibles, ademas debe calcular el total de dinero recaudado por las ventas.
 * 
*/
let samsung, iphone, xiaomi, motorola, huawei, oppo, totalVentas;
let bandera = true;
totalVentas = 0;

samsung = parseInt(prompt("Ingrese la cantidad de celulares marca Samsung en stock: "));
iphone = parseInt(prompt("Ingrese la cantidad de celulares marca Iphone en stock: "));
xiaomi = parseInt(prompt("Ingrese la cantidad de celulares marca Xiaomi en stock: "));
motorola = parseInt(prompt("Ingrese la cantidad de celulares marca Motorola en stock: "));
huawei = parseInt(prompt("Ingrese la cantidad de celulares marca Huawei en stock: "));
oppo = parseInt(prompt("Ingrese la cantidad de celulares marca Oppo en stock: "));

console.log(samsung, iphone, xiaomi, motorola, huawei, oppo);

while (bandera){

    console.log("Menu de Ventas")
    console.log("Seleccione la marca del celular que desea vender: \n 1. Samsung \n 2. Iphone \n 3. Xiaomi \n 4. Motorola \n 5. Huawei \n 6. Oppo \n 7. Salir" )
    
    opcion = parseInt(prompt("Ingrese el número que corresponde a la marca"))

    switch(opcion) {
        case 1:
            
            if(samsung == 0){
                console.log("No tienes unidades disponibles")
                break
            } 
            vendidos = parseInt(prompt("Ingrese la cantidad de celulares samsung vendidos: "))

            if (vendidos > samsung){
                console.log("No tiene disponible esa cantidad en inventario, ingrese una cantidad diferente")
                console.log(`Tiene disponible ${samsung} celulares samsung`)
            }
            else{
                precioSamsung = 3000000
                totalVentas = (vendidos * precioSamsung) +totalVentas
                samsung -= vendidos
                vendidos = 0
            }
            break

        case 2:

            if(iphone == 0){
                console.log("No tienes unidades disponibles")
                break
            }

            vendidos = parseInt(prompt("Ingrese la cantidad de celulares iphone vendidos: "))
            if (vendidos > iphone){
                console.log("No tiene disponible esa cantidad en inventario, ingrese una cantidad diferente")
                console.log(`Tiene disponible ${iphone} celulares iphone`)
            }
            else{
                precioIphone = 6000000 
                totalVentas = (vendidos * precioIphone) + totalVentas
                iphone -= vendidos
                vendidos = 0
            }
            break

        case 3:

            if(xiaomi == 0){
                console.log("No tienes unidades disponibles")
                break
            }
            vendidos = parseInt(prompt("Ingrese la cantidad de celulares xiaomi vendidos: "))
            if (vendidos > xiaomi){
                console.log("No tiene disponible esa cantidad en inventario, ingrese una cantidad diferente")
                console.log(`Tiene disponible ${xiaomi} celulares xiaomi`)
            }
            else{
                precioXiaomi = 2500000
                totalVentas = (vendidos * precioXiaomi) + totalVentas
                xiaomi -= vendidos 
                vendidos = 0
            }
            break

        case 4:
            
            if(motorola == 0){
                console.log("No tienes unidades disponibles")
                break
            }
            vendidos = parseInt(prompt("Ingrese la cantidad de celulares motorola vendidos: "))

            if (vendidos > motorola){
                console.log("No tiene disponible esa cantidad en inventario, ingrese una cantidad diferente")
                console.log(`Tiene disponible ${motorola} celulares motorola`)
            }
            else{
                precioMotorola = 1500000 
                totalVentas = (vendidos * precioMotorola) +totalVentas
                motorola -= vendidos
                vendidos = 0
            }
            break
            
        case 5:
            if(huawei == 0){
                console.log("No tienes unidades disponibles")
                break
            }
            vendidos = parseInt(prompt("Ingrese la cantidad de celulares motorola vendidos: "))
            if (vendidos > huawei){
                console.log("No tiene disponible esa cantidad en inventario, ingrese una cantidad diferente")
                console.log(`Tiene disponible ${huawei} celulares huawei`)
            }
            else{
                precioHuawei = 4000000 
                totalVentas = (vendidos * precioHuawei) + totalVentas
                huawei -= vendidos
                vendidos = 0
            }
            break

        case 6:
            if(oppo == 0){
                console.log("No tienes unidades disponibles")
                break
            }
            vendidos = parseInt(prompt("Ingrese la cantidad de celulares motorola vendidos: "))
            if (vendidos > oppo){
                console.log("No tiene disponible esa cantidad en inventario, ingrese una cantidad diferente")
                console.log(`Tiene disponible ${oppo} celulares oppo`)
            }
            else{
                precioOppo = 1500000 
                totalVentas = (vendidos * precioOppo) + totalVentas
                oppo -= vendidos
                vendidos = 0
            }
            break

        case 7:
            console.log("Sales del sistema de ventas")
            bandera = false
            break    

    }   

}

console.log(`Siguen disponibles ${samsung} celulares samsung`);
console.log(`Siguen disponibles ${iphone} celulares iphone`);
console.log(`Siguen disponibles ${xiaomi} celulares xiaomi`);
console.log(`Siguen disponibles ${motorola} celulares motorola`);
console.log(`Siguen disponibles ${huawei} celulares huawei`);
console.log(`Siguen disponibles ${oppo} celulares oppo`);

console.log(`El total de dinero recaudado por la ventas es: ${totalVentas} pesos.`)

        
            
