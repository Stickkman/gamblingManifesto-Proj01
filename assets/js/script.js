let team;
let userInput = $('.user-input')
let searchBtn = $('.search-Btn')
let nfl = $('.football')
  
  
  var wKey = "48d9d1febcb9420b8bd201317222012"; // weather key, global so can use anywhere key is needed
  var wCity = "Orlando" // started value for city, will be replaced with search input
// Weather Api CODE

// function to get the weather
function getWeather() {
    // variable for url for CURRENT weather
    var wCity = document.querySelector('input').value; // changes default value to user entered text
  
    var weatherUrl = "https://api.weatherapi.com/v1/current.json?key="+wKey+"&q="+wCity;
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
                    var temp = data.current.temp_f + "F 🌡️"; // variable for current temp
                    var windSpeed = data.current.gust_mph + "MPH 🌬️"; // variable for current wind in MPH
                    var windDir = data.current.wind_dir + " 🧭"; // variable for wind direction

                    // test log of all variables pulled from response object
                    console.log("UserInput: " + wCity + " - Temp: "+temp+" Wind: "+windSpeed+" | Wind Direction: "+windDir);
                     
                    // renders weather data to div ids in currentWeather section accordingly
                    $('#wName').text(wCity);
                    $('#wTemp').text("Temp: "+temp);
                    $('#windSpeed').text("Wind Speed: "+ windSpeed);
                    $('#windDir').text("Wind Direction: " + windDir);
                    
                          
            })

            // api call for weather alerts in area

            var weatherAlert = "https://api.weatherapi.com/v1/forecast.json?key="+wKey+"&q="+wCity +"&alerts=yes";
        fetch(weatherAlert)
            .then(function (response){ 
                console.log("Fetch Status: " + response.status);
                    if (response.status !== 200) { // if response is NOT ok then alert with status code
                        alert("Error reaching Server" + "\n Status Code: " + response.status);
                    }
                    return response.json(); 
            })
            .then(function (data2) { // used data2 vs data from above to force reading correct object
                console.log(" New 🡇 Data Object From Response Below 🡇"); console.log(data2); // logs data object response 
                     var wAlert = " ❗❗ "+data2.alerts.alert[0].headline+" ❗❗ "; // variable for weather alerts in area
                     var wAlertShort = " ❗ "+data2.alerts.alert[0].event+" ❗"; // variable for short version of alerts in area         
                     // ** can use either or of the above, whatever displays better **
                                   
            
     console.log("UserInput: " + wCity + " - Weather Alert text: " + wAlert + "ShortVersion: " + wAlertShort); // test log for weather alerts
                  
     
     $('#wAlertShort').text("Weather Alerts: "+ wAlertShort); // short alert
     $('#wAlertLong').text("Weather Details "+ wAlert); // long alert with more details

                
            })


                // below code is inlcuded in weatherApi function that is preloaded

    
    var upcomingGames = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa9423803dmshc3f5604a90d1177p1bc892jsn9e3c4329a014',
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };

    fetch('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=3', upcomingGames)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    var odds = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa9423803dmshc3f5604a90d1177p1bc892jsn9e3c4329a014',
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };

    fetch('https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso', odds)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    var teams = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa9423803dmshc3f5604a90d1177p1bc892jsn9e3c4329a014',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    fetch('https://api-american-football.p.rapidapi.com/teams?id=1', teams)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    var teamStandings = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa9423803dmshc3f5604a90d1177p1bc892jsn9e3c4329a014',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };
    
    fetch('https://api-american-football.p.rapidapi.com/standings?league=1&season=2022', teamStandings)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    var players = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa9423803dmshc3f5604a90d1177p1bc892jsn9e3c4329a014',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    fetch('https://api-american-football.p.rapidapi.com/players?id=1', players)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));  


    var playerStats = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa9423803dmshc3f5604a90d1177p1bc892jsn9e3c4329a014',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    fetch('https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1', playerStats)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));  

}


        $(function () { // waits for page to load before any code is executed
            $('.search-Btn').on('click', getWeather); // listener for search button
  // insert what function to start above ^^^^^^^^^^^ set to getWeather now and includes other apis fetches in same funciton
      });
    