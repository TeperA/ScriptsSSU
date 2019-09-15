let n = prompt("Дано натуральное число меньшее 256. Необходимо найти сумму всех нечетных битов этого числа.\n"
            + "Введите число.");
function decToBin(n)
{
    let bin = [];
    for (let i = 0; i < 8; i++)
    {
        bin.push(n % 2);
        n = Math.ceil((n - n % 2)/ 2);
    }
    return bin;
}
let bn = decToBin(n);
let sum = bn[1] + bn[3] + bn[5] + bn[7];
alert("Сумма нечетных битов числа " + n + "равна " + sum);