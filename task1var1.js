let n = prompt ("Дано четырехзначное целое число. Необходимо проверить," +
    "является ли оно числом Армстронга\nВведите число:");
//console.log("Is the number the Armstrong number?");
function div(val, by){
    return (val - val % by) / by;
}
if (n > 0) {
    let n1 = div(n, 1000);
    let n2 = div(n % 1000, 100);
    let n3 = div(n % 100, 10);
    let n4 = n % 10;
    let sumOfPows = Math.pow(n1, 4) + Math.pow(n2, 4) + Math.pow(n3, 4) + Math.pow(n4, 4);
    if (n === sumOfPows) {
        alert(n + " является числом Армстронга");
        //console.log(n + "is the Armstrong number")
    } else {
        alert(n + " не является числом Армстронга");}
} else {
    alert(n + " не натуральное число, значит не может быть числом Армстронга");
}