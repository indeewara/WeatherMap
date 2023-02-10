
// function fetchWeatherData(){

  const cacheKey = 'weatherData';
  let cachedData = localStorage.getItem(cacheKey);
  cachedData = JSON.parse(cachedData);
  //  console.log(cachedData);



  // if (cachedData) {
  //     if (Date.now() - cachedData.cacheTime < 300000) {
  //     return showweather(cachedData.weatherArray);
  //   }
  // }


//create a cookie 

fetch('cities.json')
  .then(response => response.json())
  .then(data => {
    const obj = data;

    const arr = Object.values(obj);
  
    let city = arr[0][0];    
    const CityCodes = [];
    for (let i = 0; i < arr[0].length; i++) {
      CityCodes.push(arr[0][i].CityCode);
    }
    
    return CityCodes;
  })
  .then(CityCodes => {
    for (let i = 0; i < CityCodes.length; i++) {
      id=CityCodes[i]+",";
      renderWeather(id);
      async function renderWeather(id) {


      
        let data = await fetchWeather(id);
        // console.log(data);
      // }
      
      // let URL = `http://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=5c4de2c618fa3cbf2a018fa424993520`; 
      // fetch(URL)
      // .then(response => response.json()) //insert into a coockie
      // .then(data => {

      var array = [];
      CityName = JSON.stringify(data.list[0].name);
       //console.log(data);
           let timezoneOffset = data.list[0].sys.timezone; 
           let date = new Date();
           date.setTime(date.getTime() + timezoneOffset * 1000);
  
        var weatherData = {
          cityName: data.list[0].name,
          temp: Math.round(parseInt(data.list[0].main.temp)),
          maxTemp: Math.round(parseInt(data.list[0].main.temp_max)),
          minTemp: Math.round(parseInt(data.list[0].main.temp_min)),
          pressure: parseInt(data.list[0].main.pressure),
          humidity: parseInt(data.list[0].main.humidity),
          visibility: parseInt(data.list[0].visibility) / 1000,
          windSpeed: parseFloat(data.list[0].wind.speed),
          windDegree: parseInt(data.list[0].wind.deg),
          sunrise: timecal(new Date((data.list[0].sys.sunrise) * 1000)),
          sunset: timecal(new Date((data.list[0].sys.sunset) * 1000)),
          Country:data.list[0].sys.country,
          currentTime: timecal(date),
          currentDate: datecal(date),
          weatherDes: data.list[0].weather[0].description,
          weatherIcon: data.list[0].weather[0].icon
        };
      
        var weatherArray = [];
        weatherArray.push(weatherData);

        localStorage.setItem(cacheKey, JSON.stringify({
          cacheTime: Date.now(),
          weatherArray,
        }));
  

        

        //  console.log( i);
        // console.log(CityCodes.length);

        

          // while(i == CityCodes.length-1){
         
        showweather(weatherArray);    
  }
    }
  });


//       })
//       .catch(error => {
//         console.error(error);
//       });

//   }})
//   .catch(error => console.error(error));
// // }


async function fetchWeather(id) {
  try {

  //check is the cookie empty or expired , then create the cookie fill data into cookie
        //else 
      const response = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=5c4de2c618fa3cbf2a018fa424993520`, {
          method: 'GET',
          credentials: 'same-origin'
      });
      const exam = await response.json();

     // ck = exam;
     //return ck -> get the data then return 
      return exam;

   

  } catch (error) {
      // console.error(error);
  }
}







function timecal(date){
  let hours = date.getHours();
      let minutes = date.getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes; 
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 

      let time = hours + ':' + minutes + ' ' + ampm.toLowerCase();

      return time;

}

function datecal(date){
  let options = {
    month: 'long',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('en-US', options);  

}



