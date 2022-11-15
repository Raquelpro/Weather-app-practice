const api = `cc0b84ae3c1b3dd45tb97od7d6ff24e5`;

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener(`load`, () => {
let long;
let lat;
//Accesing Geolocation of User
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPossition((position) => {
//Storing Longitude and Latitude in variables
long = position.coords.longitude;
lat = position.coords.latitude;   
const base = `https://api.shecodes.io/weather/v1/current??lon=${lon}&lat=${lat}&appid=${api}}&units=metric`;


//Using fetch to get data
fetch(base)
.then((response) => {
    return response.json();
})
.then((data) => {
const { temp } = data.maon;
const place = data.name;
const { description, icon} = data.weather[0];
const { sunrise, sunset} = data.sys;

const iconUrl =`http://shecodes-assets.s3.amazonaws.com/api/weather/${icon}@2x.png`;
const fahrenheit = (temp * 9) / 5 + 32;

//Converting Epoch(Unix) time to GMT
const sunriseGMT = new Date(sunrise * 1000);
const sunsetGMT = new Date(sunset * 1000);
 
});
});
}
});