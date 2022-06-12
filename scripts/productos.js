class Producto {
    constructor(nombre,precio,imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

generarHTML = () =>{
    return `<p> La ${this.nombre} cuesta ${this.precio}</p><br> <img src="${this.imagen}" alt="${this.nombre}"height="400 px" width="400 px">`;
};
}

let productos = [
    new Producto('estanteria',200,'../assets/productos/estante.jpeg'),
    new Producto('alcancia',500,'../assets/productos/alcancia.jpeg'),
    new Producto('jabonera',300,'../assets/productos/jabonera.jpeg'),
];

let destino = document.getElementById('mercaderia');
for(item of productos){
    nuevoEle = document.createElement('div');
    nuevoEle.innerHTML = item.generarHTML();
    destino.append(nuevoEle);
}