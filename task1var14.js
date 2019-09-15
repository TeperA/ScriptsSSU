let k = prompt("Идет k-я секунда суток. Необходимо определить "
            + "сколько полных часов и полных минут прошло с начала суток.\nВведите секунду.");
let numOfMinutes = div(k, 60);
let numOfHours = div(numOfMinutes, 60);
let elseOfMinutes = numOfMinutes % 60;
alert("С начала суток прошло ")