const url = 'https://dev.codekit.co/devcamp-api/covid-country.txt';

axios.get(url).then((response) => {
    // handle success
    const allCovidData = response.data
    console.log(allCovidData.reduce((sum, x) => sum + x["todayRecovered"], 0))
    console.log(allCovidData.filter((x) =>  x["todayDeaths"] < 10 && x["population"] > 100000000).map((x) => x["country"]))
  })
  .catch((error) => {
    // handle errors
  });
