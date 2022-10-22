let weatherAPI = {
    apiKey : "cd6580ccd030a00cdb109b8d0ea6182c",
    getWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric `)
        .then(result => result.json())
        .then(data => {
            this.displayWeather(data);
        })
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} =data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".search-result-place").innerText = `Weather in ${name}`;
        document.querySelector(".temperature-text").innerText = `${temp} °C`;
        document.querySelector(".description-text").innerText = description;
        document.querySelector(".humidity-text").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind-text").innerText = `Wind: ${speed}km/h`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`; 
        document.querySelector(".search-result").classList.remove("loading")
    }
};

document.querySelector(".search-card button").addEventListener('click', ()=>{
    const city = document.querySelector(".search-place").value;
    weatherAPI.getWeather(city)
    
})

document.querySelector(".search-place").addEventListener('keyup', (event)=>{
    if(event.key === "Enter"){
        const city = document.querySelector(".search-place").value;
        weatherAPI.getWeather(city)
    }
})

weatherAPI.getWeather("johannesburg");