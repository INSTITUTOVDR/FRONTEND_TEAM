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

  fetch(
    "https://5ea1-190-120-115-22.sa.ngrok.io/api/Entities/GetEntities",
    requestOptions
  )
    .then((response) => response.text())
    .then((data) => {
      let json = JSON.parse(data);

      console.log(json);

      const Contenedor = document.createElement(`DIV`);

      Contenedor.classList.add(`card`);

      Cont.appendChild(Contenedor);

      for (let i in json[0]) {
        const J = document.createElement(`P`);

        J.style.color = `black`;
        J.textContent = `${json[0][i]}`;
        J.style.marginBlock = `1vw`;

        Contenedor.appendChild(J);
      }
    });
});

function LimpiarPersonas() {
  while (Cont.children[1]) {
    Cont.removeChild(Cont.children[1]);
  }
}
