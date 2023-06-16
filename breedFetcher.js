const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breed = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName.toLowerCase();

  request(breed, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`I've never heard of a kitty like that: ${breedName}`, null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = fetchBreedDescription;