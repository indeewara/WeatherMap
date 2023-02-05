// (function ($) {
//   'use strict';

//   // data background
//   $('[data-background]').each(function () {
//     $(this).css({
//       'background-image': 'url(' + $(this).data('background') + ')'
//     });
//   });

//   // collapse
//   $('.collapse').on('shown.bs.collapse', function () {
//     $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
//   }).on('hidden.bs.collapse', function () {
//     $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
//   });

//   // match height
//   $('.match-height').matchHeight({
//     byRow: true,
//     property: 'height',
//     target: null,
//     remove: false
//   });
  
// })(jQuery);

// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data[0].CityCode);    
//   });

// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data[0].CityCode);
//   })
//   .catch(error => console.error(error));

// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })


// let cityData;

// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     cityData = data;
//   })
//   .catch(error => console.error(error));

// console.log(cityData);



//   const cityCodes = [];
//   for (let i = 0; i < data.length; i++) {
//     cityCodes.push(data[i].CityCode);
//   }
//   console.log(cityCodes);


// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     const cityCodes = [];
//     for (let i = 0; i < data.length; i++) {
//       cityCodes.push(data[i].CityCode);
//     }
//     console.log(cityCodes);
//   });

// function fetchWeather(ev){

//   let key
// }

// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     cityData = data;
//     useCityData();
//   })
//   .catch(error => console.error(error));



// const fs = require('fs');

// fs.readFile('cities.json', 'utf8', (err, data) => {
//   if (err) throw err;

//   const obj = JSON.parse(data);
//   const arr = Object.values(obj);
  
//   console.log(arr);
// });


// fetch('cities.json')
//   .then(response => response.json())
//   .then(data => {
//     const obj = data;
//     const arr = Object.values(obj);
  
//     console.log(arr);
//   const CityCodes = [];
// for (let i = 0; i < arr.length; i++) {
//   CityCodes.push(arr[i].CityCode);
// }

// console.log(CityCodes);
//   })
//   .catch(error => console.error(error));

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
    console.log(CityCodes);
    for (let i = 0; i < CityCodes.length; i++) {
      id=CityCodes[i]+",";
      console.log(id);
      let URL = `http://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=71bca8bb316a592a049da20874f36394`; 
      fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
       


      })
      .catch(error => {
        console.error(error);
      });

    //  function shoWWeather(resp){
    //   console.log(resp);
    //  }
      

  }})
  .catch(error => console.error(error));

// function useCityData() {
//   console.log(cityData[0].CityCode);
// }



