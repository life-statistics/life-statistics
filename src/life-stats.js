var LifeStats = function() {
    this.countryCode = 'not-set';
    this.countryStats = require('./world/')
}

LifeStats.prototype = {
    setCountry: function(countryCode) {
        this.countryCode = countryCode;

        if (this.countryCode == "not-set") {
            this.countryStats = require('./world/');    
        } else {
            this.countryStats = require('./countries/' + countryCode + '/');
        }
    },

    calculateFor: function(person) {
        return {
            "lifeExpectancy": this.countryStats.calculateLifeExpectancy(person.gender)
        }
    }
}

module.exports = LifeStats;