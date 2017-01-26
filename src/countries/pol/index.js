// {
//     "life-expecancy": {
//         "female": 81.3,
//         "male": 73.6,
//         "not-defined": 77.5
//     },
//     "country-legal": {
//        "age-of-majority": 18
//     },
//     "country-education": {
//         "start-of-education-each-year": "01-09" 
//     }
// }
var calculateLifeExpectancyInPoland = function (gender) {
    switch (gender) {
        case "male":
            return 73.6
        case "female":
            return 81.3;
        case "not-set":
            return 77.5
        default:
            throw error("invalid gender");
    }
}

module.exports = {
    calculateLifeExpectancy: calculateLifeExpectancyInPoland
}