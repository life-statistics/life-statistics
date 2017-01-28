import { counties } from '../countries'
import * as utils from '../utils';

var calculateLifeStats = ({country, gender, dateOfBirth}) => {
    var result = {};
    var countryStats = counties[country];

    if(utils.isFunction(countryStats.calculateLifeExpectancyFor)){
        result["lifeExpectancy"] = countryStats.calculateLifeExpectancyFor(gender);
    }

    if(utils.isFunction(countryStats.calculateRetirementAgeFor)){
        result["retirementAge"] = countryStats.calculateRetirementAgeFor(gender)
    }

    if(utils.isFunction(countryStats.calculateEducationPeriodsFor)){
        let yearOfBirth = parseInt(dateOfBirth.substring(0, 4));
        result["education"] = countryStats.calculateEducationPeriodsFor(yearOfBirth)
    }

    return result;
}

export { calculateLifeStats };