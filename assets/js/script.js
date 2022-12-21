let team;
let userInput = $('.user-input')
let searchBtn = $('.search-Btn')
let nfl = $('.football')
  
  
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


