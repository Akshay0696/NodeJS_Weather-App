const request = require('request');

var geocodeAddress = (address, cb) =>{
    
    let encodedAddress = encodeURIComponent(address)
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDY20FVhcOSxx2PKr1ssUOd5QMJc5zFQZw`,
        json: true
    },(error, response, body) =>{
        if(error){
            cb('Unable to Connect to Google servers');
        } else if(body.status === 'ZERO_RESULTS'){
            cb('Unable to find address.');
        }else  if(body.status === 'OK'){
            cb(undefined,{
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;