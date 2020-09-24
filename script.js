console.log("Hello")
$(document).ready(function () {
    $('#searchBtn').click(function () {
       console.log("hello")
        var city = $('.form-control').val();
        var APIkey = "b5264e43577c6a0349a29e846da1212c";
        var weatherQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIkey;
        var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=" + APIkey;
         $.ajax({

            url: weatherQueryURL,

            method: "GET"
        }).then(function (data) {

            if (city != " ") {

                var now = moment().format('l')

                console.log(data);

                //append city name and date on dashboard

                var cityName = $('#city-name');
                var weatherPic = data.weather[0].icon;
                cityName.html(data.name + "" + now);
                var currentPic = $("#current-pic");
                currentPic.attr("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png")

                var temperatureEl = $('#temperature');
                temperatureEl.html("Temperature: " + data.main.temp + " " + "Farenheit");

                var humidity = $("#humidity");
                humidity.html("Humidity: " + data.main.humidity);

                var windSpeed = $("#wind-speed");
                windSpeed.html("Windspeed: " + data.wind.speed);

                

         


                $.ajax({

                    url: forecastQueryURL,
        
                    method: "GET"
                }).then(function (forecastData) {
                    console.log(forecastData)
                })
            } else {
                $(".error").html("field empty");
            }

        })

    })



});
