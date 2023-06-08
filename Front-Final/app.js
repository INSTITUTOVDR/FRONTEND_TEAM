const BtnEnviar = document.querySelector(`#Post`);
const BtnTraer = document.querySelector(`#Get`);
const Formulario = document.querySelector(`form`);
const Cont = document.querySelector(`#ContGet`);

Formulario.reset();

BtnTraer.addEventListener(`click`, (e) => {
  e.preventDefault();

  LimpiarImg();

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://creardev.com.ar/instituto/views/getPokemon", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      let json = JSON.parse(data);

      for (let obj = 0; obj < json.data.length; obj++) {
        const Contenedor = document.createElement(`DIV`);

        Contenedor.classList.add(`card`);

        Cont.appendChild(Contenedor);

        for (let i in json.data[obj]) {
          if (i === `id`) {
            continue;
          }

          if (i === `image`) {
            const Img = document.createElement(`IMG`);
            Img.src = json.data[obj][i];
            Img.classList.add(`ImgPokemon`);

            Contenedor.appendChild(Img);
            continue;
          }

          const J = document.createElement(`P`);

          J.style.color = `black`;
          J.textContent = `${json.data[obj][i]}`;
          J.style.marginBlock = `1vw`;

          Contenedor.appendChild(J);
        }
      }
    })
    .catch((error) => console.log("error", error));
});
