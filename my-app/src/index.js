import './scss/styles.scss';
import './assets/fonts/Gilroy-Bold.ttf';

import { settings, categorisButtons, backButton, homeButton, cardsBlock, openPage } from './js/openPages'

/* cheange pages */
settings.forEach(btn => btn.addEventListener('click', () => openPage('settings')));
categorisButtons.forEach(btn => btn.addEventListener('click', () => openPage('categoris')));
backButton.addEventListener('click', () => openPage('promo'));
homeButton.forEach(btn => btn.addEventListener('click', () => openPage('promo')));
cardsBlock.forEach(btn => btn.addEventListener('click', () => {
    openPage('questions');
}))



/* ++++++++++++++++++ рендер вопросов категории ++++++++++++++++++++++ */
import { questionsGenerator } from './js/getQuestionsAboutArtist';

const card = document.querySelector('.cards-section-wrapper'); //все карточки категорий
const answerButtons = document.querySelectorAll('.categori-answers__button'); //кнопки ответов
const modalAnswerInner = document.getElementById('modal-answer-inner'); //окно модалки с ответом
const modalAnswerButton = document.querySelector('.modal-answer__button'); //кнопка ДАЛЕЕ в модалке ответа

//генерируем вопросы выбраной категории
let questionsArr //10 вопросов категории
let numberQuestion = 0;
let amountCorrectAnswers = 0;
let currentAnswer; //текущий вопрос

card.addEventListener('click', (event) => {
    numberQuestion = 0;
    amountCorrectAnswers = 0;
    currentAnswer = 0;
    const indexCategory = event.target.id.slice(5);
    questionsArr = questionsGenerator(indexCategory);
    renderQuestion();
});

modalAnswerButton.addEventListener('click', () => {
    nextQuestions();
})

const renderQuestion = () => {
    document.getElementById('answer1').innerHTML = `<span>${questionsArr[numberQuestion].answer1}</span>`;
    document.getElementById('answer2').innerHTML = `<span>${questionsArr[numberQuestion].answer2}</span>`;
    document.getElementById('answer3').innerHTML = `<span>${questionsArr[numberQuestion].answer3}</span>`;
    document.getElementById('answer4').innerHTML = `<span>${questionsArr[numberQuestion].answer4}</span>`;
    document.getElementById('answer1').setAttribute("onclick", "checkAnswer(this)");
    document.getElementById('answer2').setAttribute("onclick", "checkAnswer(this)");
    document.getElementById('answer3').setAttribute("onclick", "checkAnswer(this)");
    document.getElementById('answer4').setAttribute("onclick", "checkAnswer(this)");
    document.getElementById("question-img").src = `${questionsArr[numberQuestion].imgPath}`;
}

const nextQuestions = () => {
    if (numberQuestion < questionsArr.length) {
        renderQuestion();
        openPage('questions');
    } else {
        document.querySelector('.score').innerHTML = `${amountCorrectAnswers} / ${questionsArr.length}`;
        openPage('modal-finish');
        console.log(`Вы правильно ответили ${amountCorrectAnswers} вопросов из ${questionsArr.length}!`);
        console.log('Здесь должна быть модалка с результатом');
    }

}

function checkAnswer(answer) {
    const userAnswer = answer.textContent;
    const correctAnswer = questionsArr[numberQuestion].author;
    if (userAnswer == correctAnswer) {
        currentAnswer = true;
        amountCorrectAnswers++;
    } else {
        currentAnswer = false;
    }
    showModal();
    openPage('modal-answer')
}

window.checkAnswer = checkAnswer;

function showModal() {
    modalAnswerInner.innerHTML = `
    <img id = 'modal-answer-img' class = 'modal-answer-img'>
    <img class="modal-answer-icon" id="modal-answer-icon">
    <p class="modal-answer__picture-name">${questionsArr[numberQuestion].author}</p>
    <p class="modal-answer__author">${questionsArr[numberQuestion].name}</p>
  `
    document.getElementById("modal-answer-img").src = `${questionsArr[numberQuestion].imgPath}`;
    if (currentAnswer) {
        document.getElementById("modal-answer-icon").src = './assets/svg/modals/answer-true.svg';
    } else {
        document.getElementById("modal-answer-icon").src = './assets/svg/modals/answer-false.svg';
    }
    numberQuestion++;
}
















