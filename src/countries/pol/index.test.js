var expect = require('chai').expect;
var genders = require('../../gender');
var country = require('./');
import { EDUCATION_LEVELS } from './education-consts';
const countryName = "poland"

describe(`${countryName} life statistics`, () => {
    describe(`${countryName} life expecancy`, () => {
        it(`should return 73.6 years for a male in ${countryName}`, () => {
            let maleLifeExpectancy = country.calculateLifeExpectancyFor(genders.MALE)
            expect(maleLifeExpectancy).to.equal(73.6);
        });

        it(`should return 81.3 years for a female in ${countryName}`, () => {
            let femaleLifeExpectancy = country.calculateLifeExpectancyFor(genders.FEMALE)
            expect(femaleLifeExpectancy).to.equal(81.3);
        });

        it(`should return 77.5 years if gender is not specified in ${countryName}`, () => {
            let meanLifeExpectancy = country.calculateLifeExpectancyFor(genders.GENDER_NOT_SET)
            expect(meanLifeExpectancy).to.equal(77.5);
        });
    });

    describe(`${countryName} retirement age`, () => {
        it(`should return 65 years for a male in ${countryName}`, () => {
            let maleRetirementAge = country.calculateRetirementAgeFor(genders.MALE)
            expect(maleRetirementAge).to.equal(65.0);
        });

        it(`should return 60.0 years for a female in ${countryName}`, () => {
            let femaleRetirementAge = country.calculateRetirementAgeFor(genders.FEMALE)
            expect(femaleRetirementAge).to.equal(60.0);
        });

        it(`should return 63 years if gender is not specified in ${countryName}`, () => {
            let meanLifeExpectancy = country.calculateRetirementAgeFor(genders.GENDER_NOT_SET)
            expect(meanLifeExpectancy).to.equal(63.0);
        });
    });

    describe(`${countryName} education perioids`, () => {
        describe(`default case where the education-path has not been provided for person born before 1986`, () => {
            const personBirthYear = 1967;
            it(`should return three default educational perioids`, () => {
                let education = country.calculateEducationPeriodsFor(personBirthYear)
                expect(education).to.be.an('array').and.to.have.lengthOf(3);
                expect(education[0]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.PRIMARY_SCHOOL);
                expect(education[1]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.HIGH_SCHOOL);
                expect(education[2]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.UNIVERSITY);
            });

            it(`should return correct start and end interval for primary school`, () => {
                let education = country.calculateEducationPeriodsFor(personBirthYear)
                expect(education[0]).to.have.property('start').and.to.be.equal('1974-09-02');
                expect(education[0]).to.have.property('end').and.to.be.equal('1983-06-24');
            });

            it(`should return correct start and end interval for higher education`, () => {
                let education = country.calculateEducationPeriodsFor(personBirthYear)
                expect(education[2]).to.have.property('start').and.to.be.equal('1986-10-01');
                expect(education[2]).to.have.property('end').and.to.be.equal('1992-09-30');
            });
        })

        describe(`default case where the education-path has not been provided for person born before 1986`, () => {
            const personBirthYear = 1989;
            it(`should return four default educational perioids for any one born after 1986`, () => {
                let education = country.calculateEducationPeriodsFor(personBirthYear)
                expect(education).to.be.an('array').and.to.have.lengthOf(4);
                expect(education[0]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.PRIMARY_SCHOOL);
                expect(education[1]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.SECONDARY_SCHOOL);
                expect(education[2]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.HIGH_SCHOOL);
                expect(education[3]).to.have.property('name').and.to.equal(EDUCATION_LEVELS.UNIVERSITY);
            });

            it(`should return correct start and end interval for primary school`, () => {
                let education = country.calculateEducationPeriodsFor(personBirthYear)
                expect(education[0]).to.have.property('start').and.to.be.equal('1995-09-04');
                expect(education[0]).to.have.property('end').and.to.be.equal('2002-06-21');
            });

            it(`should return correct start and end interval for higher education`, () => {
                let education = country.calculateEducationPeriodsFor(personBirthYear)
                expect(education[3]).to.have.property('start').and.to.be.equal('2007-10-01');
                expect(education[3]).to.have.property('end').and.to.be.equal('2013-09-30');
            });
        })
    });
});