const form = document.querySelector(".top-banner form");
const apiKey = "d98d785e9ed33288cf7b14ba756e798f";
const inputVal = input.value;
 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`)
.then(response => response.json())
  .then(data => {
    var nameValue = data['city']['name'] + ', '+ data['city']['country'] + '<br>' + data['cnt'];
  })
  .catch(() => {
    msg.textContent = "City invalid, try again! 😩";
  });

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});