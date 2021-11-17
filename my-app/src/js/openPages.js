const pages = document.querySelectorAll('.wrapper');
const settings = document.querySelectorAll('.promo__settings');
const categorisButtons = document.querySelectorAll('.promo__button');
const backButton = document.querySelector('.settings-btn-prev');
const homeButton = document.querySelectorAll('.home-link');
const cardsBlock = document.querySelectorAll('.card__wrapper');

const openPage = (page) => {
    pages.forEach(elem => {
        if (elem.id == page) {
            elem.classList.remove('hide-page');
        } else {
            elem.classList.add('hide-page');
        };
    });
};
export { settings, categorisButtons, backButton, homeButton, cardsBlock, openPage };