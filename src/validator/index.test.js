import { expect } from 'chai';
import { getSupportedCountries } from '../countries'
import * as genders from '../gender';
import * as validator from './';

describe('person validator', () => {
    var supportedCountries;

    before(() => {
        supportedCountries = getSupportedCountries();
    });

    it('should return validation result as failure if falsey value passed', () => {
        var validation1 = validator.validate();
        var validation2 = validator.validate(false);
        var validation3 = validator.validate({});
        var validation4 = validator.validate(null);
        expect(validation1.result).to.be.equal('failure');
        expect(validation2.result).to.be.equal('failure');
        expect(validation3.result).to.be.equal('failure');
        expect(validation4.result).to.be.equal('failure');
    });

    it('should return validation result as failure if no date of birth is provided', () => {
        var validation = validator.validate({ gender: genders.MALE, country: supportedCountries[0] });
        expect(validation.result).to.be.equal('failure');
        expect(validation.errors).to.be.an('array').and.to.contain('invalid type of dateOfBirth');
    });

    it('should return validation result as failure if bad date format is provided', () => {
        var validation = validator.validate({ gender: genders.MALE, country: supportedCountries[0], dateOfBirth: '09-23-1999' });
        expect(validation.result).to.be.equal('failure');
        expect(validation.errors).to.be.an('array').and.to.contain('return dateOfBirth is in bad format should be YYYY-MM-DD');
    });

    it('should return validation result as failure if date of birth is invalid but provided in correct format', () => {
        var validation = validator.validate({ gender: genders.MALE, country: supportedCountries[0], dateOfBirth: '1999-99-23' });
        expect(validation.result).to.be.equal('failure');
        expect(validation.errors).to.be.an('array').and.to.contain('return dateOfBirth is in bad format should be YYYY-MM-DD');
    });

    it('should return validation result as success if correct date of birth, correct gender and correct country code is provided', () => {
        var validation = validator.validate({ gender: genders.MALE, country: supportedCountries[0], dateOfBirth: '1999-09-23' });
        expect(validation.result).to.be.equal('success');
    });
});