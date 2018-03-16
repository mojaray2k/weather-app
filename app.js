const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

//console.log(argv);
/**
 * Remember callbacks always have error and data parameters
 * geocodeAddress(address, callback) the callback has (errorMessage, results)
 * getWeather(lat, lng, callback) the callback has (errorMessage, weatherResults)
 */                          
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//                         ^                    ^
//                       address         callback(err, data)
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
                            
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//                                ^                    ^                    ^     
//                               lat                  lng            callback(err, data)
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like
${weatherResults.apparentTemperature}`);
            }
        });
    }
});


