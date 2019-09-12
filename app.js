const request = require("request");

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Kattoor.json?access_token=pk.eyJ1IjoiY2lqb2tiIiwiYSI6ImNrMDh5ZWVyOTAzNmEzbmw2YjVndzc2ZnkifQ.jsNVblCWTmk0pm-8GK8CjA";

let lattitude = null;
let longitude = null;

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to server");
  } else {
    lattitude = response.body.features[0].center[1];
    longitude = response.body.features[0].center[0];
    console.log(lattitude);
    console.log(longitude);
    const forecastUrl = `https://api.darksky.net/forecast/55d9980243987b7322db49fa0d2bf6e4/${lattitude},${longitude}`;
    request({ url: forecastUrl, json: true }, (error, response) => {
      console.log(response.body.daily.data);
    });
  }
});
