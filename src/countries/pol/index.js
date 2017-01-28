import * as genders from '../../gender';
import { educationSystems } from './education-systems';
import { educationPeriods } from './education-periods';
import { EDUCATION_LEVELS } from './education-consts';
const invalidGenderError = "invalid gender";

var calculateLifeExpectancyInPoland = (gender) => {
    switch (gender) {
        case genders.MALE:
            return 73.6;
        case genders.FEMALE:
            return 81.3;
        case genders.GENDER_NOT_SET:
            return 77.5;
        default:
            throw invalidGenderError;
    }
}

var calculateRetirementAgeInPoland = (gender) => {
    switch (gender) {
        case genders.MALE:
            return 65.0;
        case genders.FEMALE:
            return 60.0;
        case genders.GENDER_NOT_SET:
            return Math.round((calculateRetirementAgeInPoland(genders.MALE) + calculateRetirementAgeInPoland(genders.FEMALE)) / 2.0);
        default:
            throw invalidGenderError;
    }
}

var getDefaultEducationOrder = (yearOfBirth) => {
    if (yearOfBirth <= 1986) {
        return [EDUCATION_LEVELS.PRIMARY_SCHOOL, EDUCATION_LEVELS.HIGH_SCHOOL, EDUCATION_LEVELS.UNIVERSITY];
    } else {
        return [EDUCATION_LEVELS.PRIMARY_SCHOOL, EDUCATION_LEVELS.SECONDARY_SCHOOL, EDUCATION_LEVELS.HIGH_SCHOOL, EDUCATION_LEVELS.UNIVERSITY];
    }
}

var getEducationSystem = (yearOfBirth) => {
    if (yearOfBirth <= 1985) {
        return educationSystems["1900-1985"];
    } else {
        return educationSystems["1986-2005"]; // fix for: 2006
    }
}

var hasStartAge = (educationStep) => {
    if (educationStep === null || typeof educationStep !== 'object') {
        throw `${educationStep} should not be first step as it does not have start-age property`;
    }

    return educationStep.startAge > 0
}

var validateEducationOrder = (educationOrder, educationSystem) => {
    if (educationOrder instanceof Array === false) {
        return false;
    } else if (educationOrder.length == 1 && hasStartAge(educationSystem[educationOrder[0]])) {
        return true;
    }

    for (var i = 0; i < educationOrder.length - 1; i++) {
        var currentEducationStep = educationSystem[educationOrder[i]];
        var nextEducationStepName = educationOrder[i + 1];

        if (i === 0) {
            if (hasStartAge(currentEducationStep) === false) {
                return false;
            }
        }

        if (currentEducationStep.next.indexOf(nextEducationStepName) == -1) {
            return false;
        };

        return true;
    }
}

var calculateEducationPeriodsInPoland = (yearOfBirth, educationOrder) => {
    if (yearOfBirth < 1900 || yearOfBirth > 2100) {
        return false;
    }

    if (educationOrder == undefined) {
        educationOrder = getDefaultEducationOrder(yearOfBirth);
    }

    var educationSystem = getEducationSystem(yearOfBirth);

    if (validateEducationOrder(educationOrder, educationSystem) === false) {
        return false;
    }

    educationOrder = educationOrder.map((educationLevel) => {
        return educationSystem[educationLevel];
    });

    var result = [];

    educationOrder.reduce(function (startYear, current, index) {
        var { name, mode, length } = current;

        if (index == 0) {
            let startAge = current.startAge;
            let start = educationPeriods[mode][yearOfBirth + startAge].start;
            let end = educationPeriods[mode][yearOfBirth + startAge + length].end;
            result.push({ name, start, end })
            return yearOfBirth + current.startAge + length
        } else {
            let start = educationPeriods[mode][startYear].start;
            let end = educationPeriods[mode][startYear + length].end;
            result.push({ name, start, end })
            return startYear + current.length
        }
    }, 0);

    return result;
}

export {
    calculateLifeExpectancyInPoland as calculateLifeExpectancyFor,
    calculateRetirementAgeInPoland as calculateRetirementAgeFor,
    calculateEducationPeriodsInPoland as calculateEducationPeriodsFor
}
