const num1 = 31;
const num2 = 2;
const num3 = 10;
const num4 = 6;
const multiply = multiplyem();
const random = randomnum();
const mod = remainder();
const max = biggest();

function multiplyem() {
    return num1 * num2 
}

function randomnum() {
   return Math.floor(Math.random() * 10) + 1;
}

function remainder() {
    return num3 % num4;
}

function biggest() {
    return Math.max(10, 20);
}


