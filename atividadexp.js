let nomes = ["Jacarezinho", "Camundongo_das_magias", "Quero-quero", "Paçoca-healer"]
let nomeJogador = nomes[getRandomIntInclusive(0, nomes.length -1)]
let nivel = ""



//Gera um número aleatório pra experiência do jogador e index do array de nomes
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let experiencia = getRandomIntInclusive(1000, 10000)




//verifica qual o nivel de xp do jogador

if (experiencia <= 1000){
    nivel = "Ferro"
} else if (experiencia >= 1001 && experiencia <= 2000){
    nivel = "Bronze"

} else if (experiencia >= 2001 && experiencia <= 5000){
    nivel = "Prata"

} else if (experiencia >= 5001 && experiencia <= 7000){
    nivel = "Ouro"

} else if (experiencia >= 7001 && experiencia <= 8000){
    nivel = "Platina"

} else if (experiencia >= 8001 && experiencia <= 9000){
    nivel = "Ascendente"

} else if (experiencia >= 9001 && experiencia <= 10000){
    nivel = "Imortal"

} else {

    nivel = "Radiante"
}


console.log("O Herói de nome " + nomeJogador + " está no nível de " + nivel)
