let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: "ABC primary school" },
                    { location: "Peters burg" },
                ],
            },
            {
                secondary: [
                    { school_name: "ABC secondary school" },

                    { location: "St Lorence" },
                ],
            },
        ],
    },
};

//access sophia's secondary school

console.log(data.Sophia.study[1].secondary[0].school_name);

let data2 = [
    {
        pHeroCourses: { "course-x": "web development" },
    },
    {
        pHeroCourses: {
            "course-y": "phitron",
        },
    },
    {
        pHeroCourses: {
            "course-z": "acc",
        },
    },
    {
        pHeroCourses: {
            "course-xyz": "level-2",
        },
        locationField: {
            "en-US": {
                lat: 19.28563,
                lon: 72.8691,
            },
        },
    },
];

//access level-2,72.8691

console.log(data2[3].pHeroCourses["course-xyz"]);
console.log(data2[3].locationField["en-US"].lon);

let activities = {
    activity1: [
        {
            name: "listen on spotify",

            song_list: {
                song_1: "abc",
                song_2: "bcd",
            },
            id: 1,
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz",
            },
            id: 2,
        },
    ],
};

//access abc,xyz

console.log(activities["activity1"][0]["song_list"]["song_1"]);
console.log(activities["activity1"][1]["song_list"]["song_2"]);

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            street: "St. Jonson",
            city: "Petersburg",
            country: "UK",
        },
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            street: "DC road",
            city: "Kachukhet",
            country: "Bangladesh",
        },
    },
};

// access petersburg, herry

console.log(students[2222].address.city);
console.log(students[3333].name);

let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"],
        },
    },
};

//access programming er choddo,VW,Bangladesh

console.log(instructor.additionalData.books[1]);
console.log(instructor.additionalData.moreDetails.hometown.state);
console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);

const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]

//display B,D

console.log(studentData[1].details[0].gradingDetails[0].grade);
console.log(studentData[1].details[1].gradingDetails[0].grade);

let data3 = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {



                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

// access habluder adda, Beginner
console.log(data3.data[0].bookDetails.name);
console.log(data3.data[1].bookCategory);