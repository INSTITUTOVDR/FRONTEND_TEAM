function PostFromForm() {
  var url = "http://ivdr.somee.com/api/Entities/AddModifyEntities";

  let id = document.getElementById("id_Entitie").value;
  let name = document.getElementById("nombre").value;
  let surname = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let description = document.getElementById("descripcion").value;

  // Validar los campos requeridos
  if (
    id === "" ||
    name === "" ||
    surname === "" ||
    email === "" ||
    description === ""
  ) {
    swal({
      title: "Atención",
      html: "Faltan datos",
      type: "error",
      backdrop: true,
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: true,
      cancelButtonColor: "#DD6B55",
      confirmButtonColor: "#DD6B55",
    });
  } else {
    // Crear un objeto FormData y agregar los campos y valores
    var formData = new FormData();
    formData.append("id_Entitie", id);
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("description", description);

    // Configurar las opciones de la solicitud
    var requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        var json = JSON.parse(data);
        console.log(json);
        console.log(json.status);
        if (json.status == "201") {
          swal({
            title: "Atención",
            html: "Datos agregados con éxito",
            type: "success",
            backdrop: true,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: true,
            cancelButtonColor: "#DD6B55",
            confirmButtonColor: "#DD6B55",
          });
          // Limpiar los campos
          document.getElementById("id_Entitie").value = "";
          document.getElementById("nombre").value = "";
          document.getElementById("apellido").value = "";
          document.getElementById("email").value = "";
          document.getElementById("descripcion").value = "";
        } else {
          swal({
            title: "Atención",
            html: "Algo salió mal",
            type: "error",
            backdrop: true,
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: true,
            cancelButtonColor: "#DD6B55",
            confirmButtonColor: "#DD6B55",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
}

