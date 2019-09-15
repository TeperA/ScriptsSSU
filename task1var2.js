let k = prompt("Идет k-я секунда года. Необходимо определить сколько "
            + "полных месяцев и полных недель осталось до конца года.\nВведите секунду:");
const SecInDay = 60 * 60 * 24;
const SecInYear = SecInDay * 365;
const SecInWeek = SecInDay * 7;
let secondsTillYearEnd = SecInYear - k;
let numOfWeeks = div(secondsTillYearEnd, SecInWeek);
function daysInMonth(numOfMonth) {
    switch (numOfMonth) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}
let numOfMonths = 0;
let monthNum = 12;
while (secondsTillYearEnd - daysInMonth(monthNum) * SecInDay >= daysInMonth(monthNum - 1) * SecInDay) {
    numOfMonths++;
    secondsTillYearEnd = secondsTillYearEnd - daysInMonth(monthNum) * SecInDay;
    monthNum--;
}
alert("До конца года осталось " + numOfWeeks + "полных недель или " + numOfMonths + "полных месяцев");