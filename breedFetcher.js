const { argv } = require('process');
const request = require('request');

const breedFetcher = function() {
  const breed = 'https://api.thecatapi.com/v1/breeds/search?q=' + argv[2].toLowerCase();

  request(breed, (error, response, body) => {
    if (error) {
      console.error(`error kitty machine broke ${error}`);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`I've never heard of a kitty like that: ${argv[2]}`);
      return;
    }

    console.log(data[0].description);
  });
};

breedFetcher();