// Desafio Classificador de Nível de Herói
// Utilizando if/else, switch case, for, while e do-while
// Heróis da mitologia grega

// Lista de heróis para testar
let herois = [
    { nome: "Zeus", xp: 750 },
    { nome: "Hera", xp: 1500 },
    { nome: "Atena", xp: 3500 },
    { nome: "Ares", xp: 6500 },
    { nome: "Apolo", xp: 7500 },
    { nome: "Artemis", xp: 8500 },
    { nome: "Hades", xp: 9500 },
    { nome: "Poseidon", xp: 12000 }
];

// Função usando IF / ELSE IF / ELSE
function classificarHeroiIfElse(xp) {
    if (xp < 1000) return "Ferro";
    else if (xp <= 2000) return "Bronze";
    else if (xp <= 5000) return "Prata";
    else if (xp <= 7000) return "Ouro";
    else if (xp <= 8000) return "Platina";
    else if (xp <= 9000) return "Ascendente";
    else if (xp <= 10000) return "Imortal";
    else return "Radiante";
}

// Função usando SWITCH CASE
function classificarHeroiSwitch(xp) {
    let nivel;
    switch (true) {
        case (xp < 1000):
            nivel = "Ferro";
            break;
        case (xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp <= 5000):
            nivel = "Prata";
            break;
        case (xp <= 7000):
            nivel = "Ouro";
            break;
        case (xp <= 8000):
            nivel = "Platina";
            break;
        case (xp <= 9000):
            nivel = "Ascendente";
            break;
        case (xp <= 10000):
            nivel = "Imortal";
            break;
        default:
            nivel = "Radiante";
    }
    return nivel;
}

// Usando FOR para percorrer todos os heróis com IF/ELSE
console.log("=== Classificação com FOR (if/else) ===");
for (let i = 0; i < herois.length; i++) {
    let nivel = classificarHeroiIfElse(herois[i].xp);
    console.log(`O Herói de nome ${herois[i].nome} está no nível de ${nivel}`);
}

// Usando WHILE para percorrer com SWITCH
console.log("\n=== Classificação com WHILE (switch) ===");
let j = 0;
while (j < herois.length) {
    let nivel = classificarHeroiSwitch(herois[j].xp);
    console.log(`O Herói de nome ${herois[j].nome} está no nível de ${nivel}`);
    j++;
}

// Usando DO-WHILE para percorrer com IF/ELSE
console.log("\n=== Classificação com DO-WHILE (if/else) ===");
let k = 0;
do {
    let nivel = classificarHeroiIfElse(herois[k].xp);
    console.log(`O Herói de nome ${herois[k].nome} está no nível de ${nivel}`);
    k++;
} while (k < herois.length);
