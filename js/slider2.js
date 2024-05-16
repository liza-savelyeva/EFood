const pizza = document.querySelector('.pizza');

const slider_2 = pizza.querySelector('.slider__container');
const dots_2 = pizza.querySelectorAll('.slider__dot');
const btnLeft_2 = pizza.querySelector('.slider__nav-left');
const btnRight_2 = pizza.querySelector('.slider__nav-right');
const slides_2 = Array.from(slider_2.querySelectorAll('.slider__item'));
const slideCount_2 = slides_2.length;
let currentIndex_2 = 0;

btnLeft_2.addEventListener('click',showPreviousSlide_2);
btnRight_2.addEventListener('click',showNextSlide_2);

function changeIndex_2(ind) {
    currentIndex_2 = ind;
    updateSlider_2(currentIndex_2);
}

function showPreviousSlide_2() {
    currentIndex_2 = (currentIndex_2 - 1 + slideCount_2) % slideCount_2;
    updateSlider_2();
}

function showNextSlide_2() {
    currentIndex_2 = (currentIndex_2 + 1) % slideCount_2;
    updateSlider_2();
}

function updateSlider_2() {
    slides_2.forEach((slide, index) => {
        if (index === currentIndex_2) {
            slide.classList.add('seen');
            updateDots_2(index);
        } else {
            slide.classList.remove('seen');
        }
    })
}

function updateDots_2(index) {
    for (let dot of dots_2) {
        dot.classList.remove('activ');
    }
    dots_2[index].classList.add('activ');
}

updateSlider_2();