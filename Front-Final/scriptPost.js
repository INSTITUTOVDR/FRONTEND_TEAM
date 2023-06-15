let btnEnviar = document.getElementById('post')
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let descripcion = document.getElementById('descripcion');

btnEnviar.addEventListener('click', (e) => {

    e.preventDefault()

    const formData = new FormData();      
   
    formData.append('Name', nombre.value);
    formData.append('Surname', apellido.value);
    formData.append('Email', email.value);
    formData.append('Description', descripcion.value);


    if (nombre.value === '' || apellido.value === '' || email.value === '' || descripcion.value === '') {
        swal({
            title: 'Atencion',
                html: 'Faltan datos',
                type: 'error',
                backdrop: true,
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: true,
                cancelButtonColor: '#DD6B55',
                confirmButtonColor: '#DD6B55'
            })
    } else {

        fetch('', {
        method: 'POST',
        body: formData
        }).then(response => response.text())
        .then(data => {
            json = JSON.parse(data)
            console.log(json);
            console.log(json.status);
            if(json.status == '200') {
                swal({
                    title: 'Atencion',
                    html: 'Datos Agregados con exito',
                    type: 'success',
                    backdrop: true,
                    allowOutsideClick: false,
                    showCancelButton: false,
                    showConfirmButton: true,
                    cancelButtonColor: '#DD6B55',
                    confirmButtonColor: '#DD6B55'
                })
                nombre.value = '';
                apellido.value = '';
                email.value = '';
                descripcion.value = '';
            } else {
                swal({
                    title: 'Atencion',
                    html: 'Algo Salio Mal',
                    type: 'error',
                    backdrop: true,
                    allowOutsideClick: false,
                    showCancelButton: false,
                    showConfirmButton: true,
                    cancelButtonColor: '#DD6B55',
                    confirmButtonColor: '#DD6B55'
                })
            }
            
        })
        .catch(error => {
            console.log('Error');
        })

    }
})