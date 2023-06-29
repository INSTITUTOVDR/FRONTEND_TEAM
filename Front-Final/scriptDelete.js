const UrlApi = "http://ivdr.somee.com";
function deletePersona() {
  //e.preventDefault();
  const id = document.getElementById("idPersona").value;

  if (id === "") {
    swal({
      title: "Atención",
      html: "Falta ingresar el ID",
      type: "error",
      backdrop: true,
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: true,
      cancelButtonColor: "#DD6B55",
      confirmButtonColor: "#DD6B55",
    });
  } else {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(UrlApi + `/api/Entities/DeleteEntitiesById/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      var json = JSON.parse(result);
      console.log(json);
      console.log(result);
      if (json.status === 200) {
        swal({
          title: "Atención",
          html: "Entidad eliminada con éxito",
          type: "success",
          backdrop: true,
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: true,
          cancelButtonColor: "#DD6B55",
          confirmButtonColor: "#DD6B55",
        });
        document.getElementById("idPersona").value = "";
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
      console.log("error", error);
    });
  

  }
}
