const inputBox = document.getElementById("name");
const inputText = inputBox.value;
const submitButton = document.getElementById("button")

let cityName = "Hi";

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    cityName = inputText;
   console.log(`${cityName}`)
})

// const key = "3e4422d6e04655f7e63efa6a0266b041";
// const url = `api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${key}`;
// const url = "https://www.boredapi.com/api/activity"

// fetch(url)
//     .then(response => response.json()) 
//     .then(data => console.log(data))