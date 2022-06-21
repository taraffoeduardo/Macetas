let form = document.getElementById('formulario')
let nombre = document.getElementById('nombre1')
let apellido = document.getElementById('apellido1')
let edad = document.getElementById('edad1')
 

form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    console.log(nombre.value,apellido.value,edad.value)
    if(nombre.value === '' || nombre.value === null || nombre.value === 'undefined'){
        alert('El campo nombre no puede estar vacio')
    }else if(apellido.value === '' || apellido.value === null || apellido.value === 'undefined'){
        
            alert('El campo apellido no puede estar vacio')
    }else if(edad.value === '' || edad.value === null || edad.value === 'undefined'){
        
            alert('El campo edad no puede estar vacio')
    }else if(comentario.value === '' || comentario.value === null || comentario.value === 'undefined'){
        alert('Debes escribir un comentario')
    }else  {Swal.fire({
        icon: "success",
        title: 'Comentario enviado con exito'

    });
        
    }
        
    })