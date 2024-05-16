const burger = document.querySelector('.burger');

const slider_1 = burger.querySelector('.slider__container');
const dots_1 = burger.querySelectorAll('.slider__dot');
const btnLeft_1 = burger.querySelector('.slider__nav-left');
const btnRight_1 = burger.querySelector('.slider__nav-right');
const slides_1 = Array.from(slider_1.querySelectorAll('.slider__item'));
const slideCount_1 = slides_1.length;
let currentIndex_1 = 0;

btnLeft_1.addEventListener('click',showPreviousSlide_1);
btnRight_1.addEventListener('click',showNextSlide_1);

function changeIndex_1(ind) {
    currentIndex_1 = ind;
    updateSlider_1(currentIndex_1);
}

function showPreviousSlide_1() {
    currentIndex_1 = (currentIndex_1 - 1 + slideCount_1) % slideCount_1;
    updateSlider_1();
}

function showNextSlide_1() {
    currentIndex_1 = (currentIndex_1 + 1) % slideCount_1;
    updateSlider_1();
}

function updateSlider_1() {
    slides_1.forEach((slide, index) => {
        if (index === currentIndex_1) {
            slide.classList.add('seen');
            updateDots_1(index);
        } else {
            slide.classList.remove('seen');
        }
    })
}

function updateDots_1(index) {
    for (let dot of dots_1) {
        dot.classList.remove('activ');
    }
    dots_1[index].classList.add('activ');
}

updateSlider_1();

