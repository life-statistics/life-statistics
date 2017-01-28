import { getSupportedCountries } from './index';
import { expect } from 'chai';

describe('countries', () => {
    it('should return correct number of supported countries', () => {
        var supportedCountries = getSupportedCountries();

        supportedCountries.forEach(function (countryCode) {
            expect(countryCode).to.have.length(3);
        });

        expect(supportedCountries).to.have.length(2);
    });
});