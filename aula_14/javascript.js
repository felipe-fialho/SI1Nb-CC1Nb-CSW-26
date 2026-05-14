
let x = 10
if (x > 5) {
    console.log("X is greater than 5");
} else if (x < 5) {
    consele.log("X is less than 5");
} else {
    console.log("X is equal to 5")
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

for (let i = 0; i < 10; i += 2){
    console.log(i);
};

var y = 0;
while (y < 10) {
    console.log(y);
    y++;
};

y = 1;
while (y < 10) {
    (y % 2 !== 0) ? console.log(y) : null;
    y++;
}