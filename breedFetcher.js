const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?name=`;

const fetchBreedDescription = function(breedName, callback) {

  request(`${url}${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback(`The cat your looking for isn't exist`, null)
    } 
      return callback(null, data[0].description);
  });
  
};

module.exports = fetchBreedDescription;
