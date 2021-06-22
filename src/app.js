function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "bf5fabfdc76e9febd628bad10917226b";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
