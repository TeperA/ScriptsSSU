let n = prompt("Дано трехзначное число. Необходимо определить есть ли среди "
            + "цифр этого числа хотя бы две одинаковых.\nВведите число.");
let n1 = div(n, 100);
let n2 = div(n % 100, 10);
let n3 = n % 10;
if ((n1 === n2) || (n1 === n3) || (n2 === n3)) {
    alert("В числе " + n + " есть одинаковые цифры.");
} else {
    alert("В числе " + n + " нет одинаковыx цифр.")
}