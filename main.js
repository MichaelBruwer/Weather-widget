//No Data will be Visible unless you run the light-server
//Light server is being used to get info from .json

//Declareing Variables
var weatherData = {};
var request = new XMLHttpRequest();
var date = new Date();

weatherData.temp_max = {
  unit: 'celsius',
};
//constant
const KELVIN = 273;

//calling function to load data
loadData();
//declareing function of load data
function loadData() {
  //makeing request to .json file
  request.open('GET', './weather.json');
  //when loaded call next function
  request.onload = loadComplete;
  //sending to page
  request.send();
}
//declareing function
function loadComplete() {
  //putting info from jason in var
  weatherData = JSON.parse(request.responseText);
  //console log to chk if data is visible/useble
  console.log(weatherData);
  //finding id of place and incerting data into it
  document.getElementById('place').innerHTML = weatherData.city.name;
  //finding id of day and incerting data into it
  document.getElementById('day').innerHTML =
    date.getMonth() + 1 + '/' + date.getDate();
  //finding id of temp and inserting data into it
  document.getElementById('Temp').innerHTML = Math.floor(
    weatherData.list[0].main.temp - KELVIN
  );
  //finding id of maxtemp and incerting data into it
  document.getElementById('maxTemp').innerHTML = Math.floor(
    weatherData.list[0].main.temp_max - KELVIN
  );
  //finding id of mintemp and incerting data into it
  document.getElementById('minTemp').innerHTML = Math.floor(
    weatherData.list[0].main.temp_min - KELVIN
  );
  //finding id of conditionDesc and incerting data into it
  document.getElementById('conditionsDesc').innerHTML =
    weatherData.list[0].weather[0].description;
  //finding id of cloud and incerting picture into it
  document.getElementById(
    'cloud'
  ).innerHTML = `<img src="icons/${weatherData.list[0].weather[0].icon}.png"/>`;
  //finding id of Humid and inserting Humidity into it
  document.getElementById('humid').innerHTML =
    weatherData.list[0].main.humidity;
  //finding id of wind and inserting wind speed into it
  document.getElementById('wind').innerHTML = weatherData.list[0].wind.speed;

  //Repeating above steps for rest of the week,
  // Note to self
  // --easyer solusion would be to use fetch and map it

  //day1
  document.getElementById('maxTemp1').innerHTML = Math.floor(
    weatherData.list[1].main.temp_max - KELVIN
  );
  document.getElementById('minTemp1').innerHTML = Math.floor(
    weatherData.list[1].main.temp_min - KELVIN
  );
  document.getElementById(
    'cloud1'
  ).innerHTML = `<img src="icons/${weatherData.list[1].weather[0].icon}.png"/>`;
  //day2

  document.getElementById('maxTemp2').innerHTML = Math.floor(
    weatherData.list[2].main.temp_max - KELVIN
  );
  document.getElementById('minTemp2').innerHTML = Math.floor(
    weatherData.list[2].main.temp_min - KELVIN
  );
  document.getElementById(
    'cloud2'
  ).innerHTML = `<img src="icons/${weatherData.list[2].weather[0].icon}.png"/>`;
  //day3

  document.getElementById('maxTemp3').innerHTML = Math.floor(
    weatherData.list[3].main.temp_max - KELVIN
  );
  document.getElementById('minTemp3').innerHTML = Math.floor(
    weatherData.list[3].main.temp_min - KELVIN
  );
  document.getElementById(
    'cloud3'
  ).innerHTML = `<img src="icons/${weatherData.list[3].weather[0].icon}.png"/>`;
  //day4

  document.getElementById('maxTemp4').innerHTML = Math.floor(
    weatherData.list[4].main.temp_max - KELVIN
  );
  document.getElementById('minTemp4').innerHTML = Math.floor(
    weatherData.list[4].main.temp_min - KELVIN
  );
  document.getElementById(
    'cloud4'
  ).innerHTML = `<img src="icons/${weatherData.list[4].weather[0].icon}.png"/>`;
  //day5

  document.getElementById('maxTemp5').innerHTML = Math.floor(
    weatherData.list[5].main.temp_max - KELVIN
  );
  document.getElementById('minTemp5').innerHTML = Math.floor(
    weatherData.list[5].main.temp_min - KELVIN
  );
  document.getElementById(
    'cloud5'
  ).innerHTML = `<img src="icons/${weatherData.list[5].weather[0].icon}.png"/>`;
}

//working backup incase i break something

//No Data will be Visible unless you run the light-server
//Light server is being used to get info from .json

// //Declareing Variables
// var weatherData;
// var request = new XMLHttpRequest();
// var date = new Date();

// //calling function to load data
// loadData();
// //declareing function of load data
// function loadData() {
//   //makeing request to .json file
//   request.open('GET', './weather.json');
//   //when loaded call next function
//   request.onload = loadComplete;
//   //sending to page
//   request.send();
// }
// //declareing function
// function loadComplete() {
//   //putting info from jason in var
//   weatherData = JSON.parse(request.responseText);
//   //console log to chk if data is visible/useble
//   console.log(weatherData);
//   //finding id of place and incerting data into it
//   document.getElementById('place').innerHTML = weatherData.city.name;
//   //finding id of day and incerting data into it
//   document.getElementById('day').innerHTML =
//     date.getMonth() + 1 + '/' + date.getDate();
//     //finding id of maxtemp and incerting data into it
//   document.getElementById('maxTemp').innerHTML =
//     weatherData.list[0].main.temp_max;
//     //finding id of mintemp and incerting data into it
//   document.getElementById('minTemp').innerHTML =
//     weatherData.list[0].main.temp_min;
//     //finding id of conditionDesc and incerting data into it
//   document.getElementById('conditionsDesc').innerHTML =
//     weatherData.list[0].weather[0].description;
//     //finding id of cloud and incerting picture into it
//   document.getElementById(
//     'cloud'
//   ).innerHTML = `<img src="icons/${weatherData.list[0].weather[0].icon}.png"/>`;

//     //Repeating above steps for rest of the week,
//     // Note to self
//     // --easyer solusion would be to use fetch and map it

//   //day1
//   document.getElementById('maxTemp1').innerHTML =
//     weatherData.list[1].main.temp_max;
//   document.getElementById('minTemp1').innerHTML =
//     weatherData.list[1].main.temp_min;
//   document.getElementById('conditionsDesc1').innerHTML =
//     weatherData.list[1].weather[0].description;
//   document.getElementById(
//     'cloud1'
//   ).innerHTML = `<img src="icons/${weatherData.list[1].weather[0].icon}.png"/>`;
//   //day2

//   document.getElementById('maxTemp2').innerHTML =
//     weatherData.list[2].main.temp_max;
//   document.getElementById('minTemp2').innerHTML =
//     weatherData.list[2].main.temp_min;
//   document.getElementById('conditionsDesc2').innerHTML =
//     weatherData.list[2].weather[0].description;
//   document.getElementById(
//     'cloud2'
//   ).innerHTML = `<img src="icons/${weatherData.list[2].weather[0].icon}.png"/>`;
//   //day3

//   document.getElementById('maxTemp3').innerHTML =
//     weatherData.list[3].main.temp_max;
//   document.getElementById('minTemp3').innerHTML =
//     weatherData.list[3].main.temp_min;
//   document.getElementById('conditionsDesc3').innerHTML =
//     weatherData.list[3].weather[0].description;
//   document.getElementById(
//     'cloud3'
//   ).innerHTML = `<img src="icons/${weatherData.list[3].weather[0].icon}.png"/>`;
//   //day4

//   document.getElementById('maxTemp4').innerHTML =
//     weatherData.list[4].main.temp_max;
//   document.getElementById('minTemp4').innerHTML =
//     weatherData.list[4].main.temp_min;
//   document.getElementById('conditionsDesc4').innerHTML =
//     weatherData.list[4].weather[0].description;
//   document.getElementById(
//     'cloud4'
//   ).innerHTML = `<img src="icons/${weatherData.list[4].weather[0].icon}.png"/>`;
//   //day5

//   document.getElementById('maxTemp5').innerHTML =
//     weatherData.list[5].main.temp_max;
//   document.getElementById('minTemp5').innerHTML =
//     weatherData.list[5].main.temp_min;
//   document.getElementById('conditionsDesc5').innerHTML =
//     weatherData.list[5].weather[0].description;
//   document.getElementById(
//     'cloud5'
//   ).innerHTML = `<img src="icons/${weatherData.list[5].weather[0].icon}.png"/>`;
// }
