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
