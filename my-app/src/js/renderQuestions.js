import { questionsGenerator } from './getQuestionsAboutArtist';

const question = document.querySelector('.question');
const modalAnswerInner = document.getElementById('modal-answer-inner');


export const renderQuestionsAboutArtists = (indexCategories, questions, numberQuestion) => {
    question.innerHTML = `
      <div class="question-text">
        Кто автор этой картины?
      </div>
      <img class="categori-image" id="question-img"></img>
      <div class="categori-answers-wrapper">
        <div class="button categori-answers__button" id="answer1"><span>${questions[numberQuestion].answer1}</span> </div>
        <div class="button categori-answers__button" id="answer2"><span>${questions[numberQuestion].answer2}</span> </div>
        <div class="button categori-answers__button" id="answer3"><span>${questions[numberQuestion].answer3}</span> </div>
        <div class="button categori-answers__button" id="answer4"><span>${questions[numberQuestion].answer4}</span> </div>
      </div>
  `
    document.getElementById("question-img").src = `${questions[0].imgPath}`;
}

export const renderModalAnswer = (questions, numberQuestion, answerBoolean) => {
    modalAnswerInner.innerHTML = `
    <img id = 'modal-answer-img' class = 'modal-answer-img'>
    <img class="modal-answer-icon" id="modal-answer-icon">
    <p class="modal-answer__picture-name">${questions[numberQuestion].author}</p>
    <p class="modal-answer__author">${questions[numberQuestion].name}</p>
  `
    document.getElementById("modal-answer-img").src = `${questions[0].imgPath}`;
    if (answerBoolean) {
        document.getElementById("modal-answer-icon").src = './assets/svg/modals/answer-true.svg';
    } else {
        document.getElementById("modal-answer-icon").src = './assets/svg/modals/answer-false.svg';
    }
}