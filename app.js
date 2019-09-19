
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = process.argv[2];

if (!place) {
  console.log("Please provide address");
}

else {
  geocode(place, (error, { lattitude, longitude, location }) => {
    console.log(process.argv[2]);
    if (error) {
      return console.log('Error', error);
    }

    forecast(lattitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log('Error', error);
      }
      console.log(location);
      console.log(forecastData);
    });

  });
}


