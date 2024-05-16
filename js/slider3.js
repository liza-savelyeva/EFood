const sandwich = document.querySelector('.sandwich');

const slider_3 = sandwich.querySelector('.slider__container');
const dots_3 = sandwich.querySelectorAll('.slider__dot');
const btnLeft_3 = sandwich.querySelector('.slider__nav-left');
const btnRight_3 = sandwich.querySelector('.slider__nav-right');
const slides_3 = Array.from(slider_3.querySelectorAll('.slider__item'));
const slideCount_3 = slides_3.length;
let currentIndex_3 = 0;

btnLeft_3.addEventListener('click',showPreviousSlide_3);
btnRight_3.addEventListener('click',showNextSlide_3);

function changeIndex_3(ind) {
    currentIndex_3 = ind;
    updateSlider_3(currentIndex_3);
}

function showPreviousSlide_3() {
    currentIndex_3 = (currentIndex_3 - 1 + slideCount_3) % slideCount_3;
    updateSlider_3();
}

function showNextSlide_3() {
    currentIndex_3 = (currentIndex_3 + 1) % slideCount_3;
    updateSlider_3();
}

function updateSlider_3() {
    slides_3.forEach((slide, index) => {
        if (index === currentIndex_3) {
            slide.classList.add('seen');
            updateDots_3(index);
        } else {
            slide.classList.remove('seen');
        }
    })
}

function updateDots_3(index) {
    for (let dot of dots_3) {
        dot.classList.remove('activ');
    }
    dots_3[index].classList.add('activ');
}

updateSlider_3();