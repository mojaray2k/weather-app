const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address.');
        } else if (body.status === 'OVER_QUERY_LIMIT') {
            console.log('Restart your terminal or pres ctr+shift+r in your web browser')
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
}

/**
 * we want to export our geocodeAddress function using
 * module.exports, which we know as an object. Anything we put on module.exports
 * object will be available to any files that require this file. In our case, we want to make a
 * geocodeAddress property available, setting it equal to the geocodeAddress function that
 * we defined in this file
 */

module.exports.geocodeAddress = geocodeAddress;