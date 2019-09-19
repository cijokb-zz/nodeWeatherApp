const request = require("request");

const geocode = (place, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=pk.eyJ1IjoiY2lqb2tiIiwiYSI6ImNrMDh5ZWVyOTAzNmEzbmw2YjVndzc2ZnkifQ.jsNVblCWTmk0pm-8GK8CjA`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to services!');
    }
    else if (body.features.length === 0) {
      callback('Unable to find location. Try another search')
    } else {
      callback(undefined,{
        lattitude : body.features[0].center[1],
        longitude : body.features[0].center[0],
        location : body.features[0].place_name
      });
    }

  });
};

module.exports = geocode;
