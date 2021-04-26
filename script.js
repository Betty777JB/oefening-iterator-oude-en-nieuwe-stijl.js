var colors = ['yellow', 'blue', 'red', 'orange' , 'green', 'purple'];



console.log('--- While loop through Array ------------');
let pos = 1;
while (pos < colors.length + 1)  {
    console.log(`Color ${pos} is ${colors[pos - 1]}`);
    pos++; // pos=pos+1;
};

console.log('--- For loop through Array ------------');
for (let pos1 = 1; pos1 < colors.length + 1; pos1++)  {
    console.log(`Color ${pos1} is ${colors[pos1 - 1]}`);
};

// Extra
console.log('--- For-IN loop through Array ------------');
for (pos2 in colors)  {
    console.log(`Color ${pos2+1} is ${colors[pos2]}`); // pos2 is string; not number
};

console.log('--- ForEach loop through Array ------------');
function show(color, pos) {
    // console.log(`Color ${pos+1} is ${colors[pos]}`);
    console.log(`Color ${pos+1} is ${color}`);
};
colors.forEach(show);

console.log('--- ForEach loop through Array with arrow function ------------');
colors.forEach((color, pos) => console.log(`Color ${pos+1} is ${color}`));

// 1: while is 5 regels
// 1: for is 3 regels
// 2: forEach is 4 regels incl. function
// 2: forEach is 1 regels with arrow function
// 3: forEacht is korter en misschien overzichtelijker, maar For (en While) hebben meer mogelijkheden; b.v ander start- en eindpunt
// 4: Array Method is niet voor objects. For IN loop wel. En dat is wel (een soort van) itereren.


console.log('--- For-IN loop through Object ------------');
let user = {
    name: "Betty",
    email: "Blabla@example.com",
    age: 25,
    address: "Walstreet",
    occupation: "Master in js"
};


for (let entry in user) {
    console.log(`${entry}: ${user[entry]}`);
};
