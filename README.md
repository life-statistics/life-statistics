# Life Statistics

This library computes the number of days, months, years between dates of significant meening.

as input the library expects an object: 

{
    // YYYY-MM-DD
    "date-of-birth": "1989-09-23",
    // "male" | "female" | "not-declared"
    "gender": "male"
    // Three letter country-codes - ISO 3166
    "country" : "pol"
}

It should return life statistics object that looks following:

{
    "life-expectancy" : 64.5,
    "retirement" : {
        "earliest" : "2052-09-24",
        "latest" : "2058-09-24"
    }
    "life-phases": {
        "education" : [
            {
                start: "1997-09-02",
                end: "2012-06-23",
            },
            {
                start: "2012-09-02",
                end: "2015-06-23"
            }
        ],
    }
}


