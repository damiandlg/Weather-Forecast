//Function

function getForecast(cityName, apiKey, success, error) {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  
  const p1 = fetch(path)
  const p2 = p1.then((res) => {
      return res.json()
    })
    
   return p2
    
    
}


