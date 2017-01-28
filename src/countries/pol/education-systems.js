import { EDUCATION_LEVELS, YEAR_MODE } from './education-consts'

const before1986 = [
    {
        "name": EDUCATION_LEVELS.PRIMARY_SCHOOL,
        "startAge": 7,
        "length": 8,
        "mode": YEAR_MODE.SCHOOL,
        "next": [
            EDUCATION_LEVELS.HIGH_SCHOOL,
            EDUCATION_LEVELS.TECHNICAL_HIGH_SCHOOL,
            EDUCATION_LEVELS.VOCATIONAL_SCHOOL
        ]
    },
    {
        "name": EDUCATION_LEVELS.VOCATIONAL_SCHOOL,
        "mode": YEAR_MODE.SCHOOL,
        "length": 3
    },
    {
        "name": EDUCATION_LEVELS.HIGH_SCHOOL,
        "mode": YEAR_MODE.SCHOOL,
        "length": 4,
        "next": [
            EDUCATION_LEVELS.UNIVERSITY
        ]
    },
    {
        "name": EDUCATION_LEVELS.TECHNICAL_HIGH_SCHOOL,
        "mode": YEAR_MODE.SCHOOL,
        "length": 5,
        "next": [
            EDUCATION_LEVELS.UNIVERSITY
        ]
    },
    {
        "name": EDUCATION_LEVELS.UNIVERSITY,
        "mode": YEAR_MODE.ACADEMIC,
        "length": 5
    }
];

const between1986And2005 = [
    {
        "name": EDUCATION_LEVELS.PRIMARY_SCHOOL,
        "mode": YEAR_MODE.SCHOOL,
        "startAge": 6,
        "length": 6,
        "next": [
            EDUCATION_LEVELS.SECONDARY_SCHOOL
        ]
    },
    {
        "name": EDUCATION_LEVELS.SECONDARY_SCHOOL,
        "mode": YEAR_MODE.SCHOOL,
        "length": 3,
        "next": [
            EDUCATION_LEVELS.HIGH_SCHOOL
        ]
    },
    {
        "name": EDUCATION_LEVELS.HIGH_SCHOOL,
        "mode": YEAR_MODE.SCHOOL,
        "length": 3,
        "next": [
            EDUCATION_LEVELS.UNIVERSITY
        ]
    },
    {
        "name": EDUCATION_LEVELS.UNIVERSITY,
        "mode": YEAR_MODE.ACADEMIC,
        "length": 5
    }
];

var educationSystemToEducationDictionary = (educationSystem) => {
    var educationIndex = {};

    for (var i = 0; i < educationSystem.length; i++) {
        var { name, mode, length, next, startAge } = educationSystem[i]
        educationIndex[name] = { name, mode, length, next, startAge };
    }

    return educationIndex;
}

var educationSystems = {
    "1900-1985": educationSystemToEducationDictionary(before1986),
    "1986-2005": educationSystemToEducationDictionary(between1986And2005)
};

export { educationSystems }