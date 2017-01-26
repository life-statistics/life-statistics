function PersonBuilder(dateOfBirth, gender, country) {
    this.defaultDateOfBirth = dateOfBirth;
    this.defaultGender = gender || "not-set";
    this.defaultCountry = country || "not-set";
};

PersonBuilder.prototype.withDateOfBirth = function (dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
}

PersonBuilder.prototype.withGender = function (gender) {
    this.gender = gender;
    return this;
}

PersonBuilder.prototype.inCountry = function (country) {
    this.country = country;
    return this;
}

PersonBuilder.prototype.build = function () {
    return {
        dateOfBirth: this.dateOfBirth || this.defaultDateOfBirth,
        gender: this.gender || this.defaultGender,
        country: this.country || this.defaultCountry
    }
}

module.exports = PersonBuilder;