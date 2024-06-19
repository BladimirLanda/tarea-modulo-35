const responseApi = {
        hola: '¡Hola! ¿Cómo estás?',
        adios: '¡Adiós! Que tengas un buen día',
        comoestas: 'Estoy bien, gracias por preguntar',
        quepuedeshacer: 'Puedo responder a tus preguntas básicas',
        quieneres: 'Soy un ejemplo de un Bot con respuestas funcionales',
        link1: "Claro! Es el siguiente https://www.youtube.com/",
        amor: "No lo creo, campeón. Pero aquí tienes una página de apoyo https://www.lobossolitarios.com/",
};

const createSection = (response) => {
    const card = document.createElement("section");
    card.classList.add("block");
    
    const questionBot = document.createElement("div");
    questionBot.classList.add("question-user");

    const answerBot = document.createElement("div");
    answerBot.classList.add("answer-bot");

    const textContentOne = document.getElementById("bot__question").value.toLowerCase();
    
    const questions = document.createElement("p");
    questions.textContent = textContentOne;

   const answers = document.createElement("p");
   if (textContentOne == "hola") {
    answers.textContent = response.hola;
   }
   else if (textContentOne == "adios") {
    answers.textContent = response.adios;
   }
   else if(textContentOne == "cómo estás?") {
    answers.textContent = response.comoestas;
   }
   else if (textContentOne == "qué puedes hacer?") {
    answers.textContent = response.quepuedeshacer;
   }
   else if (textContentOne == "quién eres?") {
    answers.textContent = response.quieneres;
   }
   else if (textContentOne == "sabes el link de youtube?") {
    answers.textContent = response.link1;
   }
   else if (textContentOne == "ella me ama?") {
    answers.textContent = response.amor;
   }
   else {
    answers.textContent = "no te entiendo";
   }
   
   questionBot.appendChild(questions);
   answerBot.appendChild(answers);

   card.appendChild(questionBot);
   card.appendChild(answerBot);

    return card;
};

//Función Asíncrona 
const loadAnswer = async () => {
    try {
        const response = await responseApi;
        console.log(response);
    }
    catch (error) {
        console.log ("Error");
    }
}
document.addEventListener("DOMContentLoaded", loadAnswer);

//Busqueda de respuesta
const searchAnswer = async () => {
    const questionName = document.getElementById("bot__question").value.toLowerCase();
    if (questionName) {
        const botSection = document.getElementById("answer__bot");
        try {
            const response = await responseApi;
            const botCard = createSection(response);
            botSection.appendChild(botCard);
            const inputQuestion = document.getElementById("bot__question");
            inputQuestion.value = "";
        } 
        catch (error) {
            console.log ("Error");
        }
    }
}

const clickButton = document.getElementById("search__button");
clickButton.addEventListener('click', searchAnswer);

const enterSearch = document.getElementById("bot__question");
enterSearch.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        searchAnswer();
    }
});

//Restaurar
const buttonReset = document.getElementById("rest__button");
buttonReset.addEventListener("click", () => {
    const botSection = document.getElementById("answer__bot");
    botSection.innerHTML = "";
    //location.reload()
    const inputQuestion = document.getElementById("bot__question");
    inputQuestion.value = "";
    console.log("Se restauro");
});