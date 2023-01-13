// api-key
var apiKey = `dc3fa7989964e81907d5198a51061d0d`;

//button function
$("#searchBtn").click(function (e) {
  e.preventDefault();
  var city = $("#citySearch").val();
  // console.log(city);
  // https://api.openweathermap.org/geo/1.0/direct?q=London&appid={API key}
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          // this is were all the weather data will be available
          // use here to render all info or call another function here that does the rendering
          renderHTML(data);
          searchedListHistory(data);
        });
    });

  // renderHTML(data);
});
var storedCityName;
function renderHTML(data) {
  $("#today-city-heading").empty();
  $("#today-city-date").empty();
  $("#today-city-icon").empty();
  $("#today-city-temp").empty();
  $("#today-city-wind").empty();
  $("#today-city-humidity").empty();
  $("#fivedays-city-weather").empty();
  //start with clear ////////////
  // renderHTML(data) = "";
  //   console.log(data.city.name);
  var cityName = data.city.name;
  //   console.log(data.list[0].dt_txt);
  storedCityName = JSON.parse(localStorage.getItem("cityName")) || [];
  storedCityName.push(cityName);

  localStorage.setItem("cityName", JSON.stringify(storedCityName));

  var date = data.list[0].dt_txt.split(" ");
  //   console.log(data.list[0].weather[0].icon);
  var weatherIcon = data.list[0].weather[0].icon;
  //   console.log(data.list[0].main.temp);
  var temp = data.list[0].main.temp;
  //   console.log(data.list[0].wind.speed);
  var wind = data.list[0].wind.speed;
  //   console.log(data.list[0].main.humidity);
  var humidity = data.list[0].main.humidity;

  var cityNameHeading = $("<h3>").text(cityName);
  $("#today-city-heading").append(cityNameHeading);
  var cityDate = $("<p>").text(date[0]);
  $("#today-city-date").append(cityDate);
  var cityIcon = $("<img>").attr(
    "src",
    "http://openweathermap.org/img/w/" + weatherIcon + ".png"
  );
  $("#today-city-icon").append(cityIcon);

  var cityTemp = $("<p>").text(["Temp: "] + temp + ["°F"]);
  $("#today-city-temp").append(cityTemp);
  var cityWind = $("<p>").text(["Wind speed: "] + wind + ["MPH"]);
  $("#today-city-wind").append(cityWind);
  var cityHumidity = $("<p>").text(["Humidity: "] + humidity + ["%"]);
  $("#today-city-humidity").append(cityHumidity);

  // Five Days Weather Card
  var cityFiveDayWeather = $("#fivedays-city-weather");
  var cityFiveDaysCardContainer = $("<div>")
    .addClass("fivedays-card-container")
    .css("display", "flex");
  cityFiveDayWeather.append(cityFiveDaysCardContainer);

  for (var i = 3; i < data.list.length; i = i + 8) {
    var fiveDaysDate = data.list[i].dt_txt.split(" ")[0];
    // console.log(fiveDaysDate);
    // console.log(dummydata.list[i].dt_txt);
    var weatherIcon = data.list[i].weather[0].icon;
    // console.log(dummydata.list[i].weather[0].icon);
    var fiveDaysTemp = data.list[i].main.temp;
    // console.log(dummydata.list[i].main.temp);
    var fiveDaysWind = data.list[i].wind.speed;
    // console.log(dummydata.list[i].wind.speed);
    var fiveDaysHumidity = data.list[i].main.humidity;
    // console.log(dummydata.list[i].main.humidity);
    var cityFiveDayCard = $("<div>").addClass(
      "fivedays-card flex border border-primary rounded bg-primary text-center text-white m-2"
    );
    var cityFiveDayDate = $("<div>").text(fiveDaysDate);
    var cityFiveDayIcon = $("<img>").attr(
      "src",
      "http://openweathermap.org/img/w/" + weatherIcon + ".png"
    );
    var cityFiveDayTemp = $("<div>").text("Temp: " + fiveDaysTemp + "°F");
    var cityFiveDayWind = $("<div>").text(
      "Wind speed: " + fiveDaysWind + "MPH"
    );
    var cityFiveDayHumidity = $("<div>").text(
      "Humidity: " + fiveDaysHumidity + "%"
    );

    cityFiveDayCard.append(
      cityFiveDayDate,
      cityFiveDayIcon,
      cityFiveDayTemp,
      cityFiveDayWind,
      cityFiveDayHumidity
    );
    cityFiveDaysCardContainer.append(cityFiveDayCard);
  }
}

function searchedListHistory() {
  var storedCityName = JSON.parse(localStorage.getItem("cityName")) || [];
  var listContainer = $(".search-lists-container");

  listContainer.empty();

  var div = document.createElement("div");
  div.classList.add("search-list-container");
  listContainer.append(div);

  storedCityName.forEach(function (city) {
    var li = document.createElement("li");
    li.textContent = city;
    li.classList.add("search-list-items");
    div.appendChild(li);

    $(".search-list-items").addClass(
      "flex border border-secondary rounded bg-secondary text-center text-white m-3 p-3"
    );
  });
}
searchedListHistory();
