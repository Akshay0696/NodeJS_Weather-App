const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject) =>{
        let encodedAddress = encodeURIComponent(address)
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDY20FVhcOSxx2PKr1ssUOd5QMJc5zFQZw`,
            json: true
        },(error, response, body) =>{
            if(error){
                console.log(error);
                reject('Unable to Connect to Google servers');
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find address.');
            }else  if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    })
};

geocodeAddress('570008').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((err) => {
    console.log(err);
});