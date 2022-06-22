let form = document.getElementById('formulario')
let nombre = document.getElementById('nombre1')
let apellido = document.getElementById('apellido1')
let edad = document.getElementById('edad1')



form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    
    if(nombre.value === '' || nombre.value === null || nombre.value === 'undefined'){
        Swal.fire({
            icon: "error",
            title: 'Debes completar el campo',
        });
    }else if(apellido.value === '' || apellido.value === null || apellido.value === 'undefined'){
        
        Swal.fire({
            icon: "error",
            title: 'Debes completar el campo',
        });
    }else if(edad.value === '' || edad.value === null || edad.value === 'undefined'){
        Swal.fire({
            icon: "error",
            title: 'Debes completar el campo',
        });
    }else if(comentario.value === '' || comentario.value === null || comentario.value === 'undefined'){
        Swal.fire({
            icon: "error",
            title: 'Debes completar el campo',
        });
    }else  {
        Swal.fire({
        icon: "success",
        title: 'Mensaje enviado',
        text: 'Su mensaje fue enviado con exito'

    });
    
        
    }
        
    })



