const form = document.querySelector(".top-banner form");
const apiKey = "d98d785e9ed33288cf7b14ba756e798f";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
const inputVal = input.value;
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});