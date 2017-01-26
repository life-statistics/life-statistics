var validateDateOfBirth = function(dateOfBirth){
    if (typeof dateOfBirth != "string") {
        return false;
    }

    if(date.length != 10) {
        return false;
    }

    if(date.split("-").length - 1 != 2){
        return false;
    }

    return true; // it is shit - but will be fixed once moment.js is imported
}

var validateGender = function(gender){
    if (gender != "male" && gender != "female" && gender != "not-set"){
        return false;
    }

    return true;
}

var validateCountry = function(countryCode){
    if (typeof countryCode != string){
        return false;
    }
    if(countryCode.length != 3) {
        return false;
    }
    return true; // it is shit, need to have list of all iso countries somewhere
}

module.exports = {
    validateDateOfBirth: validateDateOfBirth,
    validateGender: validateGender,
    validateCountry: validateCountry
}