class producto{
    constructor(nombre,precio,imagen){
        this.nombre=nombre
        this.precio=precio
        this.imagen=imagen
    }
}
generarHTML = ()=>{
    return `<p> El/La ${this.nombre} cuesta ${this.precio}</p><br> <img src="${this.imagen}" alt="${this.nombre}"height="400 px" width="400 px">`
}

let productos = [
    new producto('estante',200,'https://hiperlibertad.vteximg.com.br/arquivos/ids/158549-1000-1000/ESTANTE-C-SOP-60X20-BCO-1-2045.jpg?v=637236251904830000'),
    new producto('alcancia',500,'alcancia.jpeg'),
    new producto('jabonera',300,'jabonera.jpeg')
]

let destino = document.getElementById('mercaderia')
for(producto of productos){
    let nuevoEle = document.createElement('div')
    nuevoEle.innerHTML = mercaderia.generarHTML()
    destino.append(nuevoEle)
}