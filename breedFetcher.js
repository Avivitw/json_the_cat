const request = require('request');
const arrArgs = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?name=`;

const breedFetcher = function () {
  request(url+ arrArgs[0], (error, response, body) => {
    if (error){
      console.log(`An Error occurd: ${error}`)
      return;
    }

    if (response && response.statusCode === 200) {
      // console.log(typeof body);
      // console.log(`body: ${body}`);
      const data = JSON.parse(body);
      console.log(data);
      //if there is no data - protect the function
      if (!data[0]) {
        console.log(`The bread your asking for isn't found`)
      } else {
        console.log(`description: ${data[0].description}`)
      }
    }
  })
  
};

breedFetcher();
