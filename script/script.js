// Variables

// 5day
// var apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
// icon
// var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
//daily
// var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;
// api-key
var apiKey = `dc3fa7989964e81907d5198a51061d0d`;

// type the city
// btn
// capture and value of the input box
$("#searchBtn").click(function () {
  //   var city = $("#citySearch").val();
  //   // console.log(city);
  //   // https://api.openweathermap.org/geo/1.0/direct?q=London&appid={API key}
  //   fetch(
  //     `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //console.log(data);
  //       var lat = data[0].lat;
  //       var lon = data[0].lon;

  //       fetch(
  //         `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log(data);

  //           // this is were all the weather data will be available
  //           // use here to render all info or call another function here that does the rendering
  //           renderHTML(data);
  //         });
  //     });

  renderHTML(dummydata);
});

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

  for (var i = 3; i < dummydata.list.length; i = i + 8) {
    var fiveDaysDate = data.list[i].dt_txt.split(" ", 1);
    // console.log(dummydata.list[i].dt_txt);
    var weatherIcon = data.list[i].weather[0].icon;
    // console.log(dummydata.list[i].weather[0].icon);
    var fiveDaysTemp = data.list[i].main.temp;
    // console.log(dummydata.list[i].main.temp);
    var fiveDaysWind = data.list[i].wind.speed;
    // console.log(dummydata.list[i].wind.speed);
    var fiveDaysHumidity = data.list[i].main.humidity;
    // console.log(dummydata.list[i].main.humidity);
    var cityFiveDayCard = $("<div>")
      .addClass("fivedays-card")
      .css("flex", 1)
      .css("width", "20%");
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

//another click button???

// $("#searchBtn").click(function (event) {
//   event.preventDefault();
//   var city = $("#citySearch").val();

// });

var dummydata = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1673406000,
      main: {
        temp: 70.18,
        feels_like: 69.67,
        temp_min: 67.28,
        temp_max: 70.18,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 995,
        humidity: 59,
        temp_kf: 1.61,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 10.02,
        deg: 206,
        gust: 30.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-11 03:00:00",
    },
    {
      dt: 1673416800,
      main: {
        temp: 68.67,
        feels_like: 67.59,
        temp_min: 65.64,
        temp_max: 68.67,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 995,
        humidity: 50,
        temp_kf: 1.68,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 10.13,
        deg: 229,
        gust: 29.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-11 06:00:00",
    },
    {
      dt: 1673427600,
      main: {
        temp: 65.71,
        feels_like: 63.86,
        temp_min: 63.48,
        temp_max: 65.71,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 40,
        temp_kf: 1.24,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 7.99,
        deg: 235,
        gust: 27.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-11 09:00:00",
    },
    {
      dt: 1673438400,
      main: {
        temp: 61,
        feels_like: 58.59,
        temp_min: 61,
        temp_max: 61,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 995,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 6.38,
        deg: 223,
        gust: 18.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-11 12:00:00",
    },
    {
      dt: 1673449200,
      main: {
        temp: 61.57,
        feels_like: 59.13,
        temp_min: 61.57,
        temp_max: 61.57,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 996,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.35,
        deg: 217,
        gust: 18.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-11 15:00:00",
    },
    {
      dt: 1673460000,
      main: {
        temp: 73.06,
        feels_like: 72,
        temp_min: 73.06,
        temp_max: 73.06,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 995,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 69,
      },
      wind: {
        speed: 11.03,
        deg: 220,
        gust: 24.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-11 18:00:00",
    },
    {
      dt: 1673470800,
      main: {
        temp: 79.43,
        feels_like: 79.43,
        temp_min: 79.43,
        temp_max: 79.43,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 991,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 13.24,
        deg: 204,
        gust: 26.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-11 21:00:00",
    },
    {
      dt: 1673481600,
      main: {
        temp: 74.25,
        feels_like: 73.67,
        temp_min: 74.25,
        temp_max: 74.25,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 991,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 10.18,
        deg: 202,
        gust: 27.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-12 00:00:00",
    },
    {
      dt: 1673492400,
      main: {
        temp: 71.22,
        feels_like: 69.87,
        temp_min: 71.22,
        temp_max: 71.22,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 992,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 10.56,
        deg: 243,
        gust: 27.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-12 03:00:00",
    },
    {
      dt: 1673503200,
      main: {
        temp: 67.78,
        feels_like: 64.98,
        temp_min: 67.78,
        temp_max: 67.78,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 994,
        humidity: 15,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 14.09,
        deg: 276,
        gust: 32.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-12 06:00:00",
    },
    {
      dt: 1673514000,
      main: {
        temp: 59.85,
        feels_like: 57.13,
        temp_min: 59.85,
        temp_max: 59.85,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 998,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 19.75,
        deg: 310,
        gust: 35.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-12 09:00:00",
    },
    {
      dt: 1673524800,
      main: {
        temp: 52.32,
        feels_like: 49.55,
        temp_min: 52.32,
        temp_max: 52.32,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1003,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 14.94,
        deg: 325,
        gust: 30.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-12 12:00:00",
    },
    {
      dt: 1673535600,
      main: {
        temp: 48.88,
        feels_like: 42.64,
        temp_min: 48.88,
        temp_max: 48.88,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1007,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 17.49,
        deg: 334,
        gust: 33.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-12 15:00:00",
    },
    {
      dt: 1673546400,
      main: {
        temp: 53.55,
        feels_like: 50.63,
        temp_min: 53.55,
        temp_max: 53.55,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1009,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 26,
      },
      wind: {
        speed: 18.41,
        deg: 350,
        gust: 26.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-12 18:00:00",
    },
    {
      dt: 1673557200,
      main: {
        temp: 56.75,
        feels_like: 53.67,
        temp_min: 56.75,
        temp_max: 56.75,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1008,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 14.03,
        deg: 354,
        gust: 19.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-12 21:00:00",
    },
    {
      dt: 1673568000,
      main: {
        temp: 54.41,
        feels_like: 51.19,
        temp_min: 54.41,
        temp_max: 54.41,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1010,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 10.4,
        deg: 347,
        gust: 17.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-13 00:00:00",
    },
    {
      dt: 1673578800,
      main: {
        temp: 51.3,
        feels_like: 47.97,
        temp_min: 51.3,
        temp_max: 51.3,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1012,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.39,
        deg: 353,
        gust: 18.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-13 03:00:00",
    },
    {
      dt: 1673589600,
      main: {
        temp: 48.9,
        feels_like: 46.02,
        temp_min: 48.9,
        temp_max: 48.9,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1012,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.67,
        deg: 348,
        gust: 15.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-13 06:00:00",
    },
    {
      dt: 1673600400,
      main: {
        temp: 46.92,
        feels_like: 43.92,
        temp_min: 46.92,
        temp_max: 46.92,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1012,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 6.15,
        deg: 353,
        gust: 13.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-13 09:00:00",
    },
    {
      dt: 1673611200,
      main: {
        temp: 45.37,
        feels_like: 43.03,
        temp_min: 45.37,
        temp_max: 45.37,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1012,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 4.65,
        deg: 12,
        gust: 9.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-13 12:00:00",
    },
    {
      dt: 1673622000,
      main: {
        temp: 46.65,
        feels_like: 45.05,
        temp_min: 46.65,
        temp_max: 46.65,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1014,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.94,
        deg: 357,
        gust: 6.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-13 15:00:00",
    },
    {
      dt: 1673632800,
      main: {
        temp: 52.81,
        feels_like: 49.39,
        temp_min: 52.81,
        temp_max: 52.81,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1013,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.14,
        deg: 355,
        gust: 5.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-13 18:00:00",
    },
    {
      dt: 1673643600,
      main: {
        temp: 57.36,
        feels_like: 54.16,
        temp_min: 57.36,
        temp_max: 57.36,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1011,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 4.41,
        deg: 348,
        gust: 5.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-13 21:00:00",
    },
    {
      dt: 1673654400,
      main: {
        temp: 55.71,
        feels_like: 52.52,
        temp_min: 55.71,
        temp_max: 55.71,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1010,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 2.89,
        deg: 43,
        gust: 3.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-14 00:00:00",
    },
    {
      dt: 1673665200,
      main: {
        temp: 52.11,
        feels_like: 49.08,
        temp_min: 52.11,
        temp_max: 52.11,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1011,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.37,
        deg: 93,
        gust: 9.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-14 03:00:00",
    },
    {
      dt: 1673676000,
      main: {
        temp: 48.87,
        feels_like: 46.74,
        temp_min: 48.87,
        temp_max: 48.87,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1011,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.23,
        deg: 126,
        gust: 9.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-14 06:00:00",
    },
    {
      dt: 1673686800,
      main: {
        temp: 46.51,
        feels_like: 43.57,
        temp_min: 46.51,
        temp_max: 46.51,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1010,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.88,
        deg: 138,
        gust: 10.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-14 09:00:00",
    },
    {
      dt: 1673697600,
      main: {
        temp: 44.26,
        feels_like: 40.19,
        temp_min: 44.26,
        temp_max: 44.26,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1010,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 7.16,
        deg: 144,
        gust: 14.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-14 12:00:00",
    },
    {
      dt: 1673708400,
      main: {
        temp: 45.09,
        feels_like: 40.21,
        temp_min: 45.09,
        temp_max: 45.09,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1010,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.35,
        deg: 152,
        gust: 17.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-14 15:00:00",
    },
    {
      dt: 1673719200,
      main: {
        temp: 53.53,
        feels_like: 50.65,
        temp_min: 53.53,
        temp_max: 53.53,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1009,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 11.79,
        deg: 169,
        gust: 18.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-14 18:00:00",
    },
    {
      dt: 1673730000,
      main: {
        temp: 58.89,
        feels_like: 56.12,
        temp_min: 58.89,
        temp_max: 58.89,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1005,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 14.12,
        deg: 171,
        gust: 19.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-14 21:00:00",
    },
    {
      dt: 1673740800,
      main: {
        temp: 55.96,
        feels_like: 53.33,
        temp_min: 55.96,
        temp_max: 55.96,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1004,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 11.79,
        deg: 169,
        gust: 22.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-15 00:00:00",
    },
    {
      dt: 1673751600,
      main: {
        temp: 52.57,
        feels_like: 50.07,
        temp_min: 52.57,
        temp_max: 52.57,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1003,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 13.69,
        deg: 166,
        gust: 29.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-15 03:00:00",
    },
    {
      dt: 1673762400,
      main: {
        temp: 50.49,
        feels_like: 48.29,
        temp_min: 50.49,
        temp_max: 50.49,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1002,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 14.05,
        deg: 170,
        gust: 34.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-15 06:00:00",
    },
    {
      dt: 1673773200,
      main: {
        temp: 49.5,
        feels_like: 44.35,
        temp_min: 49.5,
        temp_max: 49.5,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1000,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 13.62,
        deg: 172,
        gust: 36.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-15 09:00:00",
    },
    {
      dt: 1673784000,
      main: {
        temp: 48.38,
        feels_like: 43.2,
        temp_min: 48.38,
        temp_max: 48.38,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1000,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 12.62,
        deg: 167,
        gust: 36.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-15 12:00:00",
    },
    {
      dt: 1673794800,
      main: {
        temp: 50.31,
        feels_like: 48.99,
        temp_min: 50.31,
        temp_max: 50.31,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 999,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 13.18,
        deg: 165,
        gust: 39.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-15 15:00:00",
    },
    {
      dt: 1673805600,
      main: {
        temp: 61.95,
        feels_like: 61.05,
        temp_min: 61.95,
        temp_max: 61.95,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 997,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 16.67,
        deg: 186,
        gust: 31.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-15 18:00:00",
    },
    {
      dt: 1673816400,
      main: {
        temp: 64.15,
        feels_like: 63.36,
        temp_min: 64.15,
        temp_max: 64.15,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 993,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 16.22,
        deg: 178,
        gust: 32.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-15 21:00:00",
    },
    {
      dt: 1673827200,
      main: {
        temp: 61.99,
        feels_like: 61.5,
        temp_min: 61.99,
        temp_max: 61.99,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 992,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 17.25,
        deg: 167,
        gust: 33.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-16 00:00:00",
    },
  ],
  city: {
    id: 4684888,
    name: "Dallas",
    coord: {
      lat: 32.7763,
      lon: -96.7969,
    },
    country: "US",
    population: 1197816,
    timezone: -21600,
    sunrise: 1673357414,
    sunset: 1673393918,
  },
};
