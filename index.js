// Objetivo

// Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilizar uma estrutura de decisão para apresentar alguma das mensagens abaixo:

/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante */


let heroi = "Homen Aranha";
let xp = "";


if (xp < 1000) {
    console.log("O XP do", `${heroi}`,"é Ferro!")

} else if (xp < 2000 ){
    console.log("O XP do", `${heroi}`,"é Bronze!")

} else if (xp < 5000 ){
    console.log("O XP do", `${heroi}`,"é Prata!")

} else if (xp < 7000 ){
    console.log("O XP do", `${heroi}`,"é Ouro!")

} else if (xp < 8000 ){
    console.log("O XP do", `${heroi}`,"é Platina!")

} else if (xp < 9000 ){
    console.log("O XP do", `${heroi}`,"é Ascendente!")

} else if (xp < 10000 ){
    console.log("O XP do", `${heroi}`,"é Imortal!")

} else if (xp > 10001){
    console.log("O XP do", `${heroi}`,"é Radiante!")

} else {
    console.log("Não temos Herói pra informar!")
}


