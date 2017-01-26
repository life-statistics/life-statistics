var validator = require('./validation');
var LifeStats = require('./life-stats');
var lifeStats = new LifeStats();

function computeFor(person) {
  if (typeof person != 'object'){
    return {error: "invalid_input", message: "person object is required"}
  }

  person.gender = person.gender || "not-set";
  person.country = person.country || "not-set";

  if (validator.validateDateOfBirth(person.dateOfBirth) == false){
    return {error: "invalid_input", message: "date of birth shouldbe in format 'YYYY-MM-DD'"}
  }

  if (validator.validateGender(person.gender) == false){
    return {error: "invalid_input", message: "gender should be either empty string, or male or female"}
  }

  if (validator.validateCountry(person.country) == false){
    return {error: "invalid_input", message: "country code should be a three letter string, iso-3166"}
  }

  lifeStats.setCountry(person.country);
  
  return lifeStats.calculateFor(person);
}

module.exports = {
  computeFor: computeFor
};