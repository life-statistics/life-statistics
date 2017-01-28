import * as GENDER from './gender';
import * as validator from './validator';
import { calculateLifeStats } from './life-stats';
import { getSupportedCountries } from './countries'

function computeFor({dateOfBirth, country = 'pol', gender = GENDER.GENDER_NOT_SET}= {}) {
  var validation = validator.validate({dateOfBirth, country, gender});

  if (validation.result != 'success') {
    return { error: "invalid_input", message: validation.data }
  }

  return calculateLifeStats({dateOfBirth, country, gender});
}

export { computeFor, getSupportedCountries};