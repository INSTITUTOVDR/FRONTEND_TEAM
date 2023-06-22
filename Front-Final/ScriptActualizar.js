const BtnActualizar = document.querySelector(`#post`);
const InputId = document.querySelector(`#ID_Persona`);
const InputNombre = document.querySelector(`#nombre`);
const InputApellido = document.querySelector(`#apellido`);
const InputEmail = document.querySelector(`#email`);
const InputDescripcion = document.querySelector(`#descripcion`);

BtnActualizar.addEventListener(`click`, (e) => {
  e.preventDefault();

  const id = InputId.value.trim();
  const nombre = InputNombre.value.trim();
  const apellido = InputApellido.value.trim();
  const email = InputEmail.value.trim();
  const descripcion = InputDescripcion.value.trim();

  if (
    id !== "" &&
    nombre !== "" &&
    apellido !== "" &&
    email !== "" &&
    descripcion !== ""
  ) {
    const data = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      email: email,
      descripcion: descripcion,
    };

    var requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    };

    fetch(
      `https://5ea1-190-120-115-22.sa.ngrok.io/api/Entities/UpdateEntity/${id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        let json = JSON.parse(data);

        if (json.success) {
          console.log(`Datos actualizados correctamente`);
        } else {
          console.log(`No se pudo actualizar los datos`);
        }
      })
      .catch((error) => {
        console.log(`Error al realizar la solicitud: ${error}`);
      });
  } else {
    console.log(`Ingrese un ID, nombre, apellido, email y descripción válidos`);
  }
});
