const x = 2;
let y = 4;

function update(arg) {
    return Math.random() + y * arg;
}

y = 2; 
y++;
const result = update(x);
console.log(result);
//Since x is a const, its value can't be changed, but since y is not, ? can be y = 3; or y++; Values will always be greater than 6 but less than 7.