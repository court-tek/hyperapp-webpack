export const globalState = {
    title: "Hyperapp Starter Kit",
    myName: "courtney",
    value: "",
    todos: [],
    texts: ['rofl', 'lol', 'omg', 'ttyl'],
    numbers: [20, 21, 22, 23, 24, 25, 26, 27],
    acronyms: ['asap', 'byob', 'rsvp', 'diy'],
    books: [
        {
            title: 'Good Omens',
            authors: ['Terry Pratchett', 'Neil Gaiman'],
            rating: 4.25
        },
        {
            title: 'Bone: The Complete Edition',
            authors: ['Jeff Smith'],
            rating: 4.42
        },
        {
            title: 'American Gods',
            authors: ['Neil Gaiman'],
            rating: 4.11
        },
        {
            title: 'A Gentleman in Moscow',
            authors: ['Amor Towles'],
            rating: 4.36
        },
    ],
    movies: [
        "The Fantasic Mr. Fox",
        "Mr. and Mrs Smith",
        "New Jack City",
        "Collateral",
        "Matrix Revolutions",
        "Kill Bill Volume 1",
        "Meteor Man",
        "Undercover Brother"
    ],
    reviews: [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5],
    annoyingHashTags: new Set(["#selfie", "#nofilter"]),
    // State Machine App
    mode: "stopped",
}