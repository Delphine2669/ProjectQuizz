//Base de données questions
const questionnaire = [
    {
        question: "Comment s'écrit ton nom de famille",
        reponse: ["Rosinski", "Rozynsky", "Rauzinskie", "Avec un accent québécois : D la réponse D"],
        correct: null
    },

    {
        question: "Qui aurait eu son code en le repassant en 2023 ?",
        reponse: ["Caroline", "Maxime", "Personne", "Colette"],
        correct: null
    },

    {
        question: "Qui etait adepte du pain-beurre plus jeune?",
        reponse: ["Antoine", "Joakim", "Alexia", "Caro"],
        correct: null
    },

    {
        question: "A qui l'italie porte-t-elle bonheur ?",
        reponse: ["Giulia", "Coco", "Francois le Francais", "Maxime"],
        correct: null
    },

    {
        question: "De qui le rose est-il la couleur preferee ?",
        reponse: ["Kalinka", "Delphine", "Coco", "Rosa Parks"],
        correct: null
    },

    {
        question: "Qui pourrait être le deuxième formateur ?",
        reponse: ["Delphine", "Chat GPT", "Waheb", "Thomas V"],
        correct: null
    },

    {
        question: "Qui vient en train à la formation ?",
        reponse: ["Thomas D", "Nicolas", "Fabien", "49-3"],
        correct: null
    },

    {
        question: "Qui a une voiture électrique ?",
        reponse: ["Waheb", "Julien", "Donald Trump", "Nills"],
        correct: null
    },

    {
        question: "Quelle est le chiffre porte-bonheur de la famille ?",
        reponse: ["13", "666", "25", "7"],
        correct: null
    },

    {
        question: "Qui a les dents les plus blanches ?",
        reponse: ["Kalinka", "Caroline", "Giulia", "Alexia"],
        correct: null
    },

    {
        question: "Qui a des bugs réguliers sur son PC, sauf quand elle devrait en avoir ??",
        reponse: ["Cathy", "C’est techniquement impossible", "Wilhem", "Waheb"],
        correct: null
    },

    { 
        question: "Qui a une facon particuliere de manger des myrtille?",
        reponse: ["Charlotte au fraise", "Mamie Valence", "Caro", "Alexia"],
        correct: null
    },

    {
        question: "Qui descends de la montagne plus vite que son ombre ?",
        reponse: ["Kalinka", "Antoine", "Lucky Luke", "Joakim"],
        correct: null
    },

    {
        question: "Qui est gourmand ?",
        reponse: ["Antoine, Caroline, Colette", "Maxime, Alexia,Joakim", "Kalinka,Delphine", "Réponse A – Réponse B – Réponse C et donc Réponse D"],
        correct: null
    },

    {
        question: "Qui est la meilleure famille",
        reponse: ["La notre", "La notre", "La notre", "La notre"],
        correct: null
    },
]

let scoreBeer = 0; //initialisation score


//Bonnes réponses
questionnaire[0].correct = questionnaire[0].reponse[0]
questionnaire[1].correct = questionnaire[1].reponse[2]
questionnaire[2].correct = questionnaire[2].reponse[1]
questionnaire[3].correct = questionnaire[3].reponse[3]
questionnaire[4].correct = questionnaire[4].reponse[2]
questionnaire[5].correct = questionnaire[5].reponse[0]
questionnaire[6].correct = questionnaire[6].reponse[2]
questionnaire[7].correct = questionnaire[7].reponse[1]
questionnaire[8].correct = questionnaire[8].reponse[2]
questionnaire[9].correct = questionnaire[9].reponse[3]
questionnaire[10].correct = questionnaire[10].reponse[0]
questionnaire[11].correct = questionnaire[11].reponse[1]
questionnaire[12].correct = questionnaire[12].reponse[1]
questionnaire[13].correct = questionnaire[13].reponse[3]
questionnaire[14].correct = (questionnaire[14].reponse[0]) || (questionnaire[14].reponse[1]) || (questionnaire[14].reponse[2]) || (questionnaire[14].reponse[3])

const startQuestion = document.querySelector(".go > button")
startQuestion.addEventListener("click", quizz)
let index = 0

//Implantation dans le HTML
function quizz(event) {

    let index = event.target.dataset.index
    document.querySelector(".start").style.display = "none"
    const rA = document.querySelector("#rightAnswer")
    rA.style.display = "none"
    const wA = document.querySelector("#wrongAnswer")
    wA.style.display = "none"

    console.log(event.target)
    const question = document.querySelector('.quest')
    question.textContent = questionnaire[index].question

    const reponses = document.querySelectorAll('.reponse')
    reponses.forEach((r, i) => {
        r.textContent = questionnaire[index].reponse[i]
        r.dataset.correct = questionnaire[index].correct === questionnaire[index].reponse[i]
        console.log(questionnaire[index].reponse[i])
    }
    )
}

// Enregistrement réponse user
const reponsesQuestion = document.querySelectorAll(".reponse")
reponsesQuestion.forEach(response => {
    response.addEventListener("click", function (event) {
        checkAnswer(response)


        // Passage question suivante quizz (Q1-->Q15)
        index++
        // A partir de la page Wrong
        const nextQuestionW = document.querySelector(".buttonNextW > button")
        nextQuestionW.addEventListener("click", quizz)
        nextQuestionW.dataset.index = index
        nextQuestionW."window.scrollTo(0, 0);"

        // A partir de la page Right
        const nextQuestionR = document.querySelector(".buttonNextR > button")
        nextQuestionR.addEventListener("click", quizz)
        nextQuestionR.dataset.index = index
        scroll(0,0)

    })
})




console.log(reponsesQuestion)

// verifier bonne ou mauvaise reponse de l'user => affichage answer
function checkAnswer(response) {
    if (index < 14) {
        if (response.dataset.correct === "true") {
            const goodAnswer = document.querySelector("#rightAnswer")
            goodAnswer.style.display = "block"
            scoreBeer++
            console.log(scoreBeer)
            let scoreR = document.querySelector('.userScoreR')
            scoreR.textContent = (`Tu as gagné ${scoreBeer} oeufs jusqu'a maintenant!!!`)
        }
        else {
            const wrongAnswer = document.querySelector("#wrongAnswer")
            wrongAnswer.style.display = "block"
            console.log(scoreBeer)
            let scoreW = document.querySelector('.userScoreW')
            scoreW.textContent = (`Tu as ${scoreBeer} oeufs `)
        }
    } else {
        const endOfQuizz = document.querySelector(".endQuizz")
        endOfQuizz.style.display = "block"
        const cheers = document.querySelector(".cheersPic")
        cheers.style.display = "block"
        const scoreFinal = document.querySelector('.score')
        switch (scoreBeer) {
            case 0:
                scoreFinal.textContent = `${pseudo}, ceci est techniquement impossible.`;
               
                break;
            case 1:
                scoreFinal.textContent = `Sérieusement!!! ${pseudo}, tu n'as même pas répondu à la question sur toi. L'ours n'a pas eu de bière. L'ours va donc te dévorer.`;
                break;
            case 2:
                scoreFinal.textContent = `Désolé ${pseudo}, mais apparemment tu ne te connais que toi - même, car l'ours n'a eu qu'une seule bière. L'ours va donc te dévorer.`;
                break;
            case 3: case 4: case 5: case 6:
                scoreFinal.textContent = `Désolé ${pseudo}, mais l'ours n'a eu que ${scoreBeer} bières.Tu ne connais pas assez la famille, il va donc te considérer comme son futur repas. COURS VITE!!!`;
                break;
            case 7: case 8: case 9:
                scoreFinal.textContent = `Presque ${pseudo}! L'ours a eu ${scoreBeer} bières. L'ours a un stock de bières suffisant, mais envisage rapidement de courir...`;
                break;
            case 10: case 11: case 12: case 13: case 14:
                scoreFinal.textContent = `Bravo ${pseudo}! L'ours a eu ${scoreBeer} bières. L'ours a un stock de bières largement suffisant, il t'en paye même une !!! Reste sur tes gardes tout de même, un ours reste un ours.`;
                break;
            case 15:
                scoreFinal.textContent = `Soit tu as créé le site et tu fais un test, soit tu es très fort. Dans ce dernier cas, bravo ${pseudo} ! L'ours a eu ${scoreBeer} bières. L'ours a un stock de bières largement suffisant, il t'en paye même une !!! Reste sur tes gardes tout de même, un ours reste un ours.`;
                break;
            default:
                scoreFinal.textContent = `42`;
                break;
        }
    }
    return scoreBeer
    console.log(`score ${scoreBeer}`);
}





// function hideA() {
//     const wrongAnswer = document.querySelector(".wrongAnswer")
//     const displayWA = wrongAnswer.style.display

//     const rightAnswer = document.querySelector(".rightAnswer")
//     const displayRA = rightAnswer.style.display



//     if (displayWA == "block" || displayRA == "block") {
//         displayWA.style.display = "none"
//         displayRA.style.display = "none"
//     }
//     else {
//         displayWA.style.display = "block"
//         displayRA.style.display = "block"
//     }
// }


// function hideButton() {

//     document.getElementById('btn').style.display = 'none';

// }
