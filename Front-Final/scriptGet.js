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

  fetch("http://ivdr.somee.com/api/entities/getentities", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      let json = JSON.parse(data);

      console.log(json);

      const Contenedor = document.createElement(`DIV`);

      Contenedor.classList.add(`card`);

      Cont.appendChild(Contenedor);
      for (let obj = 0; obj < json.entities.length; obj++) {
        const L = document.createElement(`P`);
        Contenedor.appendChild(L);
        for (let i in json.entities[obj]) {
          const J = document.createElement(`P`);

          J.style.color = `black`;
          J.textContent = `${json.entities[obj][i]}`;
          J.style.marginBlock = `1vw`;

          L.textContent = "----------------";

          Contenedor.appendChild(J);
        }
      }
    });
});

function LimpiarPersonas() {
  while (Cont.children[1]) {
    Cont.removeChild(Cont.children[1]);
  }
}
