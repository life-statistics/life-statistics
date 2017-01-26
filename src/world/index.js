var calculateLifeExpectancyInWorld = function (gender) {
    switch (gender) {
        case "male":
            return 69.4
        case "female":
            return 74.4;
        case "not-set":
            return 71.4
        default:
            throw error("invalid gender");
    }
}

module.exports = {
    calculateLifeExpectancy: calculateLifeExpectancyInWorld
}