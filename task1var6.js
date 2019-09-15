let n = prompt("Дано натуральное число меньшее 512. Необходимо проверить, "
            + "является ли оно счастливым в двоичном представлении.\nВведите число.");
function decToBin(n)
{
    let bin = [];
    for (let i = 0; i < 9; i++)
    {
        bin.push(n % 2);
        n = Math.ceil((n - n % 2)/ 2);
    }
    return bin;
}
let binn = decToBin(n);
