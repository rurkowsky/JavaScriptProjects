const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=717dd41b7344af66758ac661887e1a02'
const API_UNITS = '&units=metric'



const getWeather = () => {
  const city = input.value || 'London'
  const URL = API_LINK + city + API_KEY + API_UNITS
  axios.get(URL).then(res => {
    const temp = res.data.main.temp
    const hum = res.data.main.humidity
    const status = Object.assign({}, ...res.data.weather)
    warning.textContent = ''
    input.value = ''

    if(status.id >= 200 && status.id <= 299){
      photo.setAttribute('src', './img/thunderstorm.png')
    }else if(status.id >= 300 && status.id <= 399){
      photo.setAttribute('src', './img/drizzle.png')
    }
    else if(status.id >= 500 && status.id <= 599){
      photo.setAttribute('src', './img/rain.png')
    }
    else if(status.id >= 600 && status.id <= 699){
      photo.setAttribute('src', './img/ice.png')
    }
    else if(status.id >= 700 && status.id <= 799){
      photo.setAttribute('src', './img/fog.png')
    }
    else if(status.id === 800){
      photo.setAttribute('src', './img/sun.png')
    }
    else if(status.id >= 801 && status.id <= 899){
      photo.setAttribute('src', './img/cloud.png')
    }else{
      photo.setAttribute('src', './img/unknow.png')
    }
    
    

    cityName.textContent = res.data.name
    temperature.textContent = Math.floor(temp)+ `℃`
    humidity.textContent = hum + '%'
    weather.textContent = status.main
  }).catch(() => warning.textContent = 'wpisz poprawną nazwę miasta!')
}
getWeather()
button.addEventListener('click',getWeather)
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getWeather()  
}})