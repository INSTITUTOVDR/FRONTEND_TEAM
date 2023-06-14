const BtnTraer = document.querySelector(`#Get`);
const Formulario = document.querySelector(`form`);
const Cont = document.querySelector(`#ContGet`);

Formulario.reset();

BtnTraer.addEventListener(`click`, (e) => {
  e.preventDefault();

  LimpiarPersonas();

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      let json = JSON.parse(data);

      console.log(json);

      const Contenedor = document.createElement(`DIV`);

      Contenedor.classList.add(`card`);

      Cont.appendChild(Contenedor);

      for (let i in json.Contribuyente) {
        const J = document.createElement(`P`);

        J.style.color = `black`;
        J.textContent = `${json.Contribuyente[i]}`;
        J.style.marginBlock = `1vw`;

        Contenedor.appendChild(J);
      }
    })
    .catch((error) => console.log("error", error));
  swal({
    title: `Atencion`,
    html: `Algo Salio Mal`,
    type: "error",
    backdrop: true,
    allowOutsideClick: false,
    showCancelButton: false,
    showConfirmButton: true,
    cancelButtonColor: `#DD6B55`,
    confirmButtonColor: `#DD6B55`,
  });
});

function LimpiarPersonas() {
  while (Cont.children[1]) {
    Cont.removeChild(Cont.children[1]);
  }
}
