import { expect } from 'chai';
import { getSupportedCountries } from './countries'
import * as genders from './gender';
import * as lifeStatistics from './';

describe('life statistics', () => {
    it('should work if no gender is provided', () => {
        var result = lifeStatistics.computeFor({dateOfBirth: '1989-07-01'})
        expect(result).to.be.an('object');
    });
});

// var expect = require('chai').expect;
// var PersonBuilder = require('./test/person-builder');
// var main = require('./index');

// describe()

// // var lifeStatistics = require('./index').lifeStatistics;
// // var supportedCountries = require('./supported-countries');
// // var genders = require('./gender');

// // describe('lifeStatistics', function () {
// //     describe('computeFor method', function () {
// //         it('should require date-of-birth to be passed as argument', function () {
// //             expect(lifeStatistics.computeFor())
// //                 .to.deep.equal({ error: "invalid_input", message: "person object is required" });
// //         });
// //     });

// //     describe('check the result format for every country supported', function () {
// //         var personBuilder = new PersonBuilder("1989-09-23");

// //         it('should contain the lifeExpectancy property and the result should be a number greater than 0 ', function () {
// //             var counryCodes = supportedCountries.getCountryCodes();
// //             var supportedGenders = genders.SUPPORTED_GENDERS;

// //             counryCodes.forEach(function (countryCode) {
// //                 supportedGenders.forEach(function (gender) {

// //                     var person = personBuilder
// //                         .withGender(gender)
// //                         .inCountry(countryCode)
// //                         .build();

// //                     var stats = lifeStatistics.computeFor(person);

// //                     expect(stats).to.have.property('lifeExpectancy')
// //                         .and.to.be.greaterThan(0);
// //                 });
// //             });
// //         });
// //     })
// // })