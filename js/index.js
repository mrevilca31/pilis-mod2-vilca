// PARA FORMULARIO DE SECCION REGISTRO

function onClick(event) {
  event.preventDefault();

  const mensaje = {
    comercio: document.getElementById("comercio").value,
    titular: document.getElementById("propietario").value,
    celular: document.getElementById("celular").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      Swal.fire(
        "Registro Completado",
        "Gracias por su participación",
        "success"
      );
      cleanForm();
    })
    .catch((err) => console.log(err));
}

function cleanForm() {
  let formulario = document.getElementById("form");
  formulario.reset();
}

let btn = document.getElementById("btn-enviar");
btn.addEventListener("click", onClick);

// PARA API DE CLIMA

const lat = -24.18325167401517;
const lon = -65.33140072141545;
const key = "9dd72d33d18930ddaa9ab61dc7fac90d";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=es`
)
  .then((res) => res.json())
  .then((json) => mostrarClima(json))
  .catch((error) => console.log(error));

function mostrarClima(data) {
  const {
    main: { temp, humidity },
    weather: [arr],
  } = data;

  const contenido = document.querySelector(".pronostico-info");
  contenido.innerHTML = `
        <h5 class="clima-lugar"> Ciudad Cultural </h5>
        <img src="https://openweathermap.org/img/wn/${
          arr.icon
        }@2x.png" alt="icon" class = "icon-clima">
        <h2 class="temp"> ${parseInt(temp)}°C</h2>
        <h4 class="otra-temp"> Humedad: ${parseInt(humidity)}% </h4>
        <h4 class="otra-temp"> ${arr.description}</h4>
    `;
}
