import * as genders from '../gender';

var isDate = function (date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

var validateDateOfBirth = ({dateOfBirth} = {}) => {
    if (typeof dateOfBirth != "string") {
        return 'invalid type of dateOfBirth'
    }

    if (dateOfBirth.length != 10) {
        return 'return dateOfBirth is in bad format should be YYYY-MM-DD'
    }

    let dateParts = dateOfBirth.split("-");

    if (dateParts[0].length !== 4 || dateParts[1].length !== 2 || dateParts[2].length !== 2) {
        return 'return dateOfBirth is in bad format should be YYYY-MM-DD'
    }

    if (isDate(dateOfBirth) === false) {
        return 'return dateOfBirth is in bad format should be YYYY-MM-DD'
    }
}

var validateGender = ({gender} = {}) => {
    if (gender != genders.MALE && gender != genders.FEMALE && gender != genders.GENDER_NOT_SET) {
        return `invalid gender can only by one of three options ${genders.MALE} ${genders.FEMALE} ${genders.GENDER_NOT_SET}`;
    }
}

var validateCountry = ({country} = {}) => {
    if (typeof country !== 'string') {
        return 'country code needs to be a three letter iso-3166 string';
    }
}

var validate = (person) => {
    if (person === null || typeof person !== 'object') {
        return { result: "failure", errors: ['please provide as input object with dateOfBirth, gender and country properties'] };
    }

    var validators = [validateDateOfBirth, validateGender, validateCountry];
    var errors = [];

    validators.forEach((validationFn) => {
        var validationResult = validationFn(person);
        if (validationResult != undefined) {
            return errors.push(validationResult);
        }
    });

    if (errors.length > 0) {
        return { result: "failure", errors: errors };
    } else {
        return { result: "success" }
    }
}

export {validate};