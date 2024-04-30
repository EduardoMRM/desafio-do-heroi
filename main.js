const heroi = "Cole";
let XP = 10005;

if (XP < 1000) {
    XP = "Ferro"
} else if (XP > 1001 && XP < 2000){
    XP = "Bronze"
} else if (XP > 2001 && XP < 5000){
    XP = "Prata"
} else if (XP > 5001 && XP < 7000){
    XP = "Ouro"
} else if (XP > 7001 && XP < 8000){
    XP = "Platina"
} else if (XP > 8001 && XP < 9000){
    XP = "Ascendente"
} else if (XP > 9001 && XP < 10000){
    XP = "Imortal"
} else if (XP >= 10001){
    XP = "Radiante"
} else {
    console.log("O XP desse herói é desconhecido")
}

console.log("0 Herói de nome, " +heroi+ ", está no nível " +XP);
