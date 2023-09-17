const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c69746d12bmsh7aadd7e9e2704fbp1ecaddjsn6e644c53c9ff',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

function convertTimestampToLocalTime(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // Use 24-hour format
  };
  const localTime = date.toLocaleString(undefined, options); // Convert to local time string
  return localTime;
}


const fetchWeather = (city)=> {
  cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(result => {
      console.log(result);

      cloud_pct.innerHTML = result.cloud_pct;
      cloud_pct1.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp1.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_speed1.innerHTML = result.wind_speed;
      sunR = convertTimestampToLocalTime(result.sunrise);
      sunS = convertTimestampToLocalTime(result.sunset);
      sunrise.innerHTML = sunR;
      sunset.innerHTML = sunS;
    })
    .catch(error => {
      console.error(error);
    });
}

function displayWeatherData(city) {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(result => {
      console.log(result);

      sunR = convertTimestampToLocalTime(result.sunrise);
      sunS = convertTimestampToLocalTime(result.sunset);
      document.getElementById("cloud_pct" + city).innerHTML = result.cloud_pct;
      document.getElementById("temp" + city).innerHTML = result.temp;
      document.getElementById("feels_like" + city).innerHTML = result.feels_like;
      document.getElementById("humidity" + city).innerHTML = result.humidity;
      document.getElementById("min_temp" + city).innerHTML = result.min_temp;
      document.getElementById("max_temp" + city).innerHTML = result.max_temp;
      document.getElementById("wind_speed" + city).innerHTML = result.wind_speed;
      document.getElementById("wind_degrees" + city).innerHTML = result.wind_degrees;
      document.getElementById("sunrise" + city).innerHTML = sunR;
      document.getElementById("sunset" + city).innerHTML = sunS;
    })
    .catch(error => {
      console.error(error);
    });
}

// Call the function
submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(city.value);
});

displayWeatherData("Delhi");
displayWeatherData("California");
displayWeatherData("Moscow");
displayWeatherData("Canberra");

