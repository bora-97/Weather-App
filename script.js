console.log("Hello")
$(document).ready(function){
    $('#searchBtn').click(function){

        var city = $('.form-control').val();
        var APIkey = "8935db265b7cc0c65699dd8b71cd06b1";
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + APIkey;

        $.ajac({
            
          url: queryURL ,

          method: "GET"
        }).then(function(data)){

            if(city != " "){
                
                var now = moment().format('l')
                
                console.log(data);

                //append city name and date on dashboard
             
                var cityName = $(#'city-name');
                var weatherPic = data.weather[0].icon;
                cityName.html(data.name + "" + now);
                var currentPic = $("#current-pic");
                currentPic.attr("src","https://openweathermap.org/img/wn/" + weatherPic +"@2x.png" )

                var temperature = $('#temperature');
                temperature.html("Temperature: " + data.main.temp + " " + "Farenheit");

                var humidity = $("#humidity");
                humidity.html("Humidity: " + data.main.humidity);

                var windSpeed = $("#wind-speed");
                windSpeed.html("Windspeed: " + data.wind.speed);

                var UVindex = $("#UV-index");
                

            


            }else{
                $(".error").html("field empty");
            }

        })

})



});