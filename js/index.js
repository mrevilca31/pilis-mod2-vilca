const lat = -24.18325167401517;
const lon = -65.33140072141545;
const key = "9dd72d33d18930ddaa9ab61dc7fac90d";


fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
.then(res=>res.json())
.then(json=>mostrarClima(json))
.catch(error=>console.log(error))

function mostrarClima(data) {
    const{
        main:{ temp, temp_min, temp_max}, weather:[arr]
    }=data;

    const contenido = document.querySelector(".pronostico-info")
    contenido.innerHTML=`
        <h5 class="clima-lugar"> Ciudad Cultural </h5>
        <img src="https://openweathermap.org/img/wn/${
          arr.icon
        }@2x.png" alt="icon">
        <h2 class="temp"> ${parseInt(temp)}°C</h2>
        <h4 class="temp-otra"> Temperatura Minima: ${parseInt(temp_min)}°C </h4>
        <h4 class="temp-otra"> Temperatura Maxima: ${parseInt(temp_max)}°C</h4>
    `
}


