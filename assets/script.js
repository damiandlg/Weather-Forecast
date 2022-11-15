const form = document.querySelector(".top-banner form");
const apiKey = "d98d785e9ed33288cf7b14ba756e798f";
const inputVal = input.value;


  function weatherFor() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`)
.then(response => response.json())
  .then(data => {
    var nameValue = data['city']['name'] + ', '+ data['city']['country'] + '<br>' + data['cnt'];
    var dayOne = data['list'][0]['dt_txt'] + '<br>' + 'Temp:' + data['list'][0]['main']['temp']  + '&#176;' + '<br>' + 'Humidity:' + data['list'][0]['main']['humidity'] + '%';
  })
  .catch(() => {
    msg.textContent = "City invalid, try again! 😩";
  });

  cityName.innerHTML = nameValue;
  dayOneTemp.innerHTML = dayOne;
  }

  button.addEventListener('click', weatherFor)
