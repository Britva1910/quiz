const images = [{
        author: 'Павел Федотов',
        name: 'Сватовство майора',
        year: '1852',
        imageNum: '0',
        answer1: 'Павел Федотов',
        answer2: 'err',
        answer3: 'err',
        answer4: 'err',
    },
    {
        author: 'Эдгар Дега',
        name: 'Голубые танцовщицы',
        year: '1897',
        imageNum: '1',
        answer1: 'err',
        answer2: 'err',
        answer3: 'Эдгар Дега',
        answer4: 'err',
    },
    {
        author: 'Веронезе',
        name: 'Пир в доме Левия',
        year: '1563',
        imageNum: '2',
        answer1: 'err',
        answer2: 'err',
        answer3: 'err',
        answer4: 'Веронезе',
    },
    {
        author: 'Илья Репин',
        name: 'Иван Грозный и сын его Иван',
        year: '1885',
        imageNum: '3',
        answer1: 'err',
        answer2: 'Илья Репин',
        answer3: 'err',
        answer4: 'err',
    },
    {
        author: 'Константин Маковский',
        name: 'Портрет графини Софьи',
        year: '1890',
        imageNum: '4',
        answer1: 'Константин Маковский',
        answer2: 'err',
        answer3: 'err',
        answer4: 'err',
    },
    {
        author: 'Василий Перов',
        name: 'Приезд гувернантки в купеческий дом',
        year: '1866',
        imageNum: '5',
        answer1: 'err',
        answer2: 'err',
        answer3: 'Василий Перов',
        answer4: 'err',
    },
    {
        author: 'Микеланджело',
        name: 'Сотворение Адама',
        year: '1511',
        imageNum: '6',
        answer1: 'err',
        answer2: 'Микеланджело',
        answer3: 'err',
        answer4: 'err',
    },
    {
        author: 'Пьер Огюст Ренуар',
        name: 'Прогулка в Булонском лесу',
        year: '1873',
        imageNum: '7',
        answer1: 'Пьер Огюст Ренуар',
        answer2: 'err',
        answer3: 'err',
        answe4: 'err',
    },
    {
        author: 'Ян Вермеер',
        name: 'Хозяйка и служанка',
        year: '1667',
        imageNum: '8',
        answer1: 'Ян Вермеер',
        answer2: 'err',
        answer3: 'err',
        answer4: 'err',
    },
    {
        author: 'Василий Поленов',
        name: 'Московский дворик',
        year: '1877',
        imageNum: '9',
        answer1: 'err',
        answer2: 'err',
        answer3: 'err',
        answer4: 'Василий Поленов',
    }
];

const button = document.querySelector('.button-categories');
const answers = document.querySelectorAll('.button-answer');
const next = document.querySelector('.button-next');




button.addEventListener('click', () => {
    show.showQuestion();
})

answers.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        show.getAnswer(event);
        show.checkAnswer();
        show.showModal();
        show.cheangeNumberQuestion();
    });
})
next.addEventListener('click', () => {
    show.showQuestion();
})




class showCategories {
    constructor() {
        this.numberQuestion = 0;
        this.images = images;
        this.answer;
        this.result;
    }

    cheangeNumberQuestion() {
        this.numberQuestion++;
    }

    showQuestion() {
        console.log(`Вопрос: кто автор №${this.images[this.numberQuestion].imageNum}`);
    }

    getAnswer(event) {
        this.answer = event.target.id;
        console.log(this.answer);
    }

    checkAnswer() {
        if (this.images[this.numberQuestion][`${this.answer}`] != 'err') {
            this.result = true;
        } else {
            this.result = false;
        }

    }
    showModal() {
        if (this.result) {
            console.log('This is true!');
            console.log('Push next button');
        } else {
            console.log('False!');
            console.log('Push next button');
        }
    }



}
let show = new showCategories();