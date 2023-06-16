const { argv } = require('process');
const fetchBreedDescription = require('./breedFetcher');

fetchBreedDescription(argv[2], (error, description) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }

  console.log(description);
});