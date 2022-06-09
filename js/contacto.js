let form = document.getElementById('formulario')
let nombre = document.getElementById('nombre1')
let apellido = document.getElementById('apellido1')
let edad = document.getElementById('edad1')

form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    console.log(nombre.value,apellido.value,edad.value)
    if(nombre.value === '' || nombre.value === null || nombre.value === 'undefined'){
        alert('El cambpo nombre no puede estar vacio')
    }else{
        if(apellido.value === '' || apellido.value === null || apellido.value === 'undefined'){
            alert('El cambpo apellido no puede estar vacio')
    }else{
        alert('Tus datos fueron enviados con exito')
    }
}})