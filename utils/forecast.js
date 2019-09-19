const request = require("request");

const forecast = (lattitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/55d9980243987b7322db49fa0d2bf6e4/${lattitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to services!');
    }
    else if (body.error) {
      callback('Unable to find location. Try another search')
    } else {
      callback(undefined,
        body.daily.data[0].summary
      );
    }

  });
};

module.exports = forecast;
