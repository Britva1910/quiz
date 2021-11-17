import { categoriesArrays } from './createCategoriesArrays';
import {images} from "./images";

const getRandomNumber = (max) => {
  let min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* генератор не повторяющихся цифр */

const numbers = [];
const getRandomNum = (min, max) => {
  const number = Math.floor(min + Math.random() * (max - min))
  if (numbers.includes(number)) return getRandomNum(min, max);
  else {
    numbers.push(number);
    return number;
  }
}
/*перемешивание массива*/
const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
}


export const questionsGenerator = (index) => {
  const numberQuestionMin = index * 10;
  const numberQuestionMax = (+index * 10) + 9;
  const sourceArray = categoriesArrays[+index]; //текущий массив для категории

  let questions = [
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    {
      imgPath: '',
      author: '',
      name: '',
      year: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    }
  ]
  for (let i = 0; i < 10; i++) {
    let randomNumber = getRandomNum(0, 10);
    questions[randomNumber].imgPath = `./../assets/img/pictures/${sourceArray[i].imageNum}.jpg`;
    questions[randomNumber].author = `${sourceArray[i].author}`;
    questions[randomNumber].name = `${sourceArray[i].name}`;
    questions[randomNumber].year = `${sourceArray[i].year}`;
    let randomArr = [1, 2, 3, 4];
    shuffle(randomArr);
    questions[randomNumber][`answer${randomArr[0]}`] = `${sourceArray[i].author}`;
    questions[randomNumber][`answer${randomArr[1]}`] = `${images[getRandomNumber(120)].author}`;
    questions[randomNumber][`answer${randomArr[2]}`] = `${images[getRandomNumber(120)].author}`;
    questions[randomNumber][`answer${randomArr[3]}`] = `${images[getRandomNumber(120)].author}`;
  }
  return questions;
}
