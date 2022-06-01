let macetas
let estantes
let velasAromaticas
let cuotas
let compra
let pagar
let efectivo
let respuestaInput
let cantidad = 0 
let acum = 0
const productos = ['macetas', 'estantes', 'velasAromaticas'];
function calcularPrecio(cantidad,precio) {
    return cantidad*precio
}
   
do {
    respuestaInput = prompt(`Bienvenido a Macetas y Mas, elija una opcion del menu:
    1 comprar macetas
    2 comprar estantes
    3 comprar velas aromaticas
    4 para finalizar su compra
    0 si desea salir del menu`)
    switch (respuestaInput) {
    case "0":
        break;    
    case "1": 
        productos[0] = 200
        alert(`Genial, las macetas cuestan $${productos[0]} cada una`)
        cantidad = prompt(`Ingrese cantidad que quiera comprar`)
        if(isNaN(cantidad)){
            alert(`Ingrese la cantidad de forma numerica`)
        }else{
            acum += calcularPrecio(cantidad,macetas)
            alert(`El total a abonar es: $${calcularPrecio(cantidad,macetas)}`)
        }
       break;
    case "2": 
        productos[1] = 500
        alert(`Genial, los estantes cuestan $${productos[1]} cada unidad`)
        cantidad = prompt(`Ingrese cantidad que quiera comprar`)
        if(isNaN(cantidad)){
            alert(`Ingrese la cantidad de forma numerica`)
        }else{
            acum += calcularPrecio(cantidad,estantes)
            alert(`El total a abonar es: $${calcularPrecio(cantidad,estantes)}`)
        }    
        break;
    case "3":
        productos[2] = 100
        alert(`Genial, las velas aromaticas cuestan $${productos[2]} cada una`)
        cantidad = prompt(`Ingrese cantidad que quiera comprar`)
        if(isNaN(cantidad)){
            alert(`Ingrese la cantidad de forma numerica`)
        }else{
            acum += calcularPrecio(cantidad,velasAromaticas)
            alert(`El total a abonar es: $${calcularPrecio(cantidad,velasAromaticas)}`)
        }  
        break;
    case "4": 
        alert(`El total de su compra es: $${acum}`)
        break;       
    default: alert(`El valor ingresado no corresponde a ninguno del menu`)
    
        break;
}
    
} while (respuestaInput != 0);
