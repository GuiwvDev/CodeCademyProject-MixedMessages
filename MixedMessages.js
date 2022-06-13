const esportes = ["Futebol", "Basquete", "Vôlei"];
const diaSemana = ["na segunda-feira", "na terça-feira", "na quarta-feira", "na quinta-feira", "na sexta-feira", "no sábado", "no domingo"];
const horaDia = ["de manhã", "à tarde", "à noite"];

const randomNumber = (array) => {
    let randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber
}

const randomMessage = (array1, array2, array3) => {
    let esporte = array1[randomNumber(array1)];
    let diaDaSemana = array2[randomNumber(array2)];
    let horaDoDia = array3[randomNumber(array3)];
    return `Vamos jogar ${esporte} ${diaDaSemana} ${horaDoDia}` ;
}

console.log(randomMessage(esportes, diaSemana, horaDia));