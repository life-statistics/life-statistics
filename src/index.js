var validator = require('./validation');

function computeFor(dateOfBirth, gender, country) {
  if (validator.validateDateOfBirth(dateOfBirth) == false){
    return {error: "invalid_input", message: "date of birth shouldbe in format 'YYYY-MM-DD'"}
  }

  gender = gender || "not-set";
  country = country || "not-set";

  if (validator.validateGender(gender) == false){
    return {error: "invalid_input", message: "gender should be either empty string, or male or female"}
  }

  if (validator.validateGender(country) == false){
    return {error: "invalid_input", message: "country code should be a three letter string, iso-3166"}
  }

  return {
    "life-expectancy" : 64.5,
  }
}

module.exports = {
  computeFor: computeFor
};