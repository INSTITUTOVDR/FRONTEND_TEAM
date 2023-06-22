let UrlApi = "http://ivdr.somee.com";
function deletePersona() {
  const BtnDelete = document.querySelector("#btnDelete");
  const idInput = document.querySelector("#idPersona"); // Supongamos que el ID input tiene un ID de "idInput"

  BtnDelete.addEventListener("click", () => {
    const id = idInput.value; // Obtén el valor del input del ID

    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(UrlApi + `/api/Entities/DeleteEntitiesById/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  });
}
