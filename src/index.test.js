var expect = require('chai').expect;
var lifeStatistics = require('./index');

describe('lifeStatistics', function () {
    describe('computeFor method', function () {
        it('should require date-of-birth to be passed as argument', function () {
            expect(lifeStatistics.computeFor())
                .to.deep.equal({ error: "invalid_input", message: "date of birth shouldbe in format 'YYYY-MM-DD'" });
        });
    })
})