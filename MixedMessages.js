const messages = ["Melhor começar trabalhando!", 
"Vamos descansar antes de qualquer coisa", 
"Que tal jogar um jogo?", 
"Dia de fazer um café da manhã mais caprichado!", 
"Dia para começar passeando com o cachorro!"]


const randomMessage = (array) => {
    let randomNumber = Math.floor(Math.random() * messages.length);
    return messages[randomNumber];
}

console.log(randomMessage(messages));