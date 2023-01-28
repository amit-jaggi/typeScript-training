export { }

enum Days {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
};

// let whichDay:Days;
// whichDay = Days.saturday;
// console.log(whichDay);


function whichDay(day: Days) {
    return day;
}
console.log(whichDay(Days.thursday));
