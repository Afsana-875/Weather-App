const apikey="07c7a0bcaebbdf1e73839dfbd66a35fd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-img");
async function checkWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    if( response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
        if(data.weather[0].main=="Clouds"){
            weatherImg.src="Images/cloud.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImg.src="Images/rain1.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherImg.src="Images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImg.src="Images/drizel";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImg.src="Images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        
    }
    }
  
searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
})
   

//07c7a0bcaebbdf1e73839dfbd66a35fd
//https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
//units=metric&q=Bangladesh