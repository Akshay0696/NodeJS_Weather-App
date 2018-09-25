const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
var argv = yargs
        .options({
            a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
            }
        })
        .help()
        .alias('help','h')
        .argv;


geocode.geocodeAddress(argv.address, (error, results) =>{
    if(error){
        console.log(error);
    }else{
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, (error,weatherResults) =>{
            if(error){
                console.log(error);
            }else{
                weatherCelsiusTemp = (weatherResults.temperature - 32) * .5556;
                weatherCelsiusAppTemp = (weatherResults.temperature - 32) * .5556;
                console.log(`It's currently ${weatherCelsiusTemp}c. it feel's like ${weatherCelsiusAppTemp}c`);
            }
        });
    }
});

// forcast.io secret key ==> 6f058ab16bcb1e02fafd29a1d290dfc6
