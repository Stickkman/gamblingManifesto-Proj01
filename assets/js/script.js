var wKey = "48d9d1febcb9420b8bd201317222012"; // weather key, global so can use anywhere key is needed

// Weather Api CODE

// function to get the weather
function getWeather() {
    // variable for url for CURRENT weather
    var wCity = "Orlando" // implement this to city of searched team
    var weatherUrl = "http://api.weatherapi.com/v1/current.json?key="+wKey+"&q="+wCity;
        fetch(weatherUrl)
            .then(function (response){ 
                console.log("Fetch Status: " + response.status);
                    if (response.status !== 200) { // if response is NOT ok then alert with status code
                        alert("Error reaching Server" + "\n Status Code: " + response.status);
                    }
                    return response.json(); // ??might not need json since we resquest json in url, possible issues??
            })
            .then(function (data) {
                console.log(" 🡇 Data Object From Response Below 🡇"); console.log(data); // logs data object response 
                    var temp = data.current.temp_f + "F 🌡️";
                    var windSpeed = data.current.gust_mph + "MPH 🌬️"; 
                    var windDir = data.current.wind_dir;

                    // test log off all variables pulled from response object
                    console.log("Temp: "+temp+" Wind: "+windSpeed+" | Wind Direction: "+windDir);
                     

                
            })

}

getWeather();// runs function test 

// sidenotes: 
// can get weather alerts using 'desc' for the area using 'areas'(city) within the 'alert' array.
//     can also just use the 'event' for shorter version of 'desc'
// might need to convert city from sports team or viseversa

// emoji icons included in some variables data so we dont have to add them later can just use the variable.