function getForecast(city, callBack) {
  const apiKey = 'd98d785e9ed33288cf7b14ba756e798f'
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      callBack(json)
    })
    .catch(err => console.log(err.message))
}

export{
  getForecast
}
