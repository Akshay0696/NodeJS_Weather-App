const request = require('request');

 var getWeather = (lat, lng, cb) =>{

    let forecastApi = '6f058ab16bcb1e02fafd29a1d290dfc6';
    request({
        url:`https://api.darksky.net/forecast/${forecastApi}/${lat},${lng}`,
        json: true
    },(error, response, body) =>{
        if(error){
            cb('Unable to connect Forcast.io server.');
        } else if(response.statusCode === 404){
            cb('Unable to fetch weather.');
        }else if(response.statusCode === 200){
            cb(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    })

 } 

 module.exports.getWeather = getWeather;