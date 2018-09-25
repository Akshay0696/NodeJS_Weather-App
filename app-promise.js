const yargs = require('yargs');
const axios = require('axios');

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDY20FVhcOSxx2PKr1ssUOd5QMJc5zFQZw`

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/6f058ab16bcb1e02fafd29a1d290dfc6/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) =>{
    var temperature = response.data.currently.temperature;
    var appTemperature = response.data.currently.temperature;
    console.log(`it's currently ${temperature}. it feel's like ${appTemperature}`);
}).catch((err) => {
   if(err.code === 'ENOTFOUND'){
       console.log('Unable to connect to API servers');
   }else{
       console.log(err.message);
   }
});

