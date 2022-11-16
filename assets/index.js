//Function

 class Forecast {
    constructor(apiKey, units = 'metric') {
      this.apiKey = apiKey
      this.units = units
    }
    async getForecast(cityName) {
      const{ apiKey, units} = this
      const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`
      
      const res = await fetch(path)
      const json =  await res.json()
              
       return json
        
        
    }
 }




