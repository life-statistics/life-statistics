var supportedCountries = require('./countries/supported-countries.json')

var getCountryCodes = function () {
    var supportedCountryCodes = [];
    
    for (var countryCode in supportedCountries) {
        if (supportedCountries.hasOwnProperty(countryCode)) {
            if (supportedCountries[countryCode] === 1) {
                supportedCountryCodes.push(countryCode);
            }
        }
    }

    return supportedCountryCodes;
};

module.exports = {
    getCountryCodes: getCountryCodes
}