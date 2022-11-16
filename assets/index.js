//Function

 async function getForecast(cityName, apiKey) {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  
  const res = await fetch(path)
  const json =  await res.json()
          
   return json
    
    
}


