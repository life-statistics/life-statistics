import * as pol from './pol';
import * as deu from './deu';

var counties = {
    pol,
    deu
};

var getSupportedCountries = () => {
    var countryCodes = [];
    for (var countryCode in counties) {
        if (counties.hasOwnProperty(countryCode)) {
            countryCodes.push(countryCode);
        }
    }
    return countryCodes;
}

export { counties, getSupportedCountries }