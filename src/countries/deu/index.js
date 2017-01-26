var calculateLifeExpectancyInGermany = function (gender) {
    switch (gender) {
        case "male":
            return 78.3
        case "female":
            return 83.0;
        case "not-set":
            return 80.6
        default:
            throw error("invalid gender");
    }
}

module.exports = {
    calculateLifeExpectancy: calculateLifeExpectancyInGermany
}