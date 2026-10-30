document.writeln("<p>");

// Zadaneczko 1
for (let i = 1; i <= 10; i++) {
    document.write(`${i} `);
}
document.writeln("<br>");

// Zadaneczko 2
for (let i = 10; i >= 1; i--) {
    document.write(`${i} `)
}
document.writeln("<br>");

// Zadaneczko 3
let x = 0;
for (let i = 0; i <= 10; i++) {
    x += i;
}
document.writeln(`wynik liczb 1 do 10: ${x}<br>`);

// Zadaneczko 4
for (let i = 2; i<= 10; i++) {
    document.write(`${i * 2} `);
}
document.writeln("<br>");

// Zadaneczko 5 i 6
let zgromadzane_przez = parseInt(prompt("Przez ile odkładano"));
let zgromadzano_ile = parseFloat(prompt("Ile odkładano"));

let zgromadzone = 0;
for (let i = 0; i < zgromadzane_przez; i ++) {
    zgromadzone += zgromadzano_ile;
    zgromadzone *= 1.08
}
document.writeln(`Zgromadzono ${zgromadzone} po ${zgromadzane_przez} miesiącach<br>`);

// Zadaneczko 7
let start = 5;
let change = 10;

let sum = 0;
for (let i = 0; i < 100; i ++) {
    sum += start + (change * i);
}
document.writeln(`Suma liczb z ciągu 100 liczb, start na ${start}, zwiększające o ${change}: ${sum}<br>`);

//Zadaneczko 8
let bricked = 0;
for (let i = 1; i <= 10; i++) {
    bricked += i * i;
}
document.writeln(`Piramida 10x10 ilość cegieł: ${bricked}<br>`);

// Zadaneczko 9
let x_size = parseInt(prompt("Podaj x piramidy"));
let y_size = parseInt(prompt("Podaj y piramidy"));
let z_size = parseInt(prompt("Podaj z piramidy"));

let bricked2 = 0;
for (let i = 0; i < y_size; i++) {
    let width = x_size - (i * z_size);
    if (width <= 0) {
        document.writeln(`X jest zbyt małe, aby zadziałało z Y: ${y_size} oraz Z: ${z_size}<br>`);
        break;
    }
    bricked2 = bricked2 + width * width;
}

document.writeln(`Wyliczona suma cegieł: ${bricked2}<br>`);


// Zadaneczko 10 i 11
let K = parseFloat(prompt("Podaj wagę jednej cegły"));

let waga_8 = bricked * K;
document.writeln(`Waga cegieł z zad 8: ${waga_8} KG<br>`);

// Zadaneczko 12
let N = parseInt(prompt("Podaj N ciągu"));
let X = parseInt(prompt("Podaj wartość początkową"));
let Y = parseInt(prompt("Podaj różnicę wartości w ciągu"));

for (let i = 0; i < N; i++) {
    document.write(`${X + (Y * i)} `);
}

document.writeln("<br>");

// Zadaneczko 13
let a = parseInt(prompt("Podaj wartość początkową"));

while (a != 0) {
    let b = parseInt(prompt(`a: ${a}, Podaj wartość b`));
    document.writeln(`${a} + ${b} = ${a + b}<br>`);
    a = a + b;
}

// Zadaneczko 14
let factor = parseInt(prompt("Podaj liczbę do silnii"));

let res = 1;
for (let i = 1; i <= factor; i++) {
    res *= i;
}

document.writeln(`${factor}! = ${res}<br>`);

// Zadaneczko 15
let n = parseInt(prompt("Ciąg kwadratów, długość:"));
let duck = parseInt(prompt("Wartość początkowa"));

let temp = duck;
document.writeln(`${temp} `);
for (let i = 0; i < n; i++) {
    temp = Math.pow(temp, 2);
    document.writeln(`${temp} `);
}

document.writeln("<br>");

// Zadaneczko 16

sum = 0;
for (let i = 0; i < 10; i ++) {
    sum += Math.random() * (100 - 50) + 50;
}
let avg = sum/10;

document.writeln(`Suma 10 losowych liczb: ${sum}<br>`);
document.writeln(`Średnia 10 losowych liczb: ${avg}<br>`);

document.writeln("</p>");