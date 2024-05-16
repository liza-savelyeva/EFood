const set = document.querySelector('.set');

const slider_5 = set.querySelector('.slider__container');
const dots_5 = set.querySelectorAll('.slider__dot');
const btnLeft_5 = set.querySelector('.slider__nav-left');
const btnRight_5 = set.querySelector('.slider__nav-right');
const slides_5 = Array.from(slider_5.querySelectorAll('.slider__item'));
const slideCount_5 = slides_5.length;
let currentIndex_5 = 0;

btnLeft_5.addEventListener('click',showPreviousSlide_5);
btnRight_5.addEventListener('click',showNextSlide_5);

function changeIndex_5(ind) {
    currentIndex_5 = ind;
    updateSlider_5(currentIndex_5);
}

function showPreviousSlide_5() {
    currentIndex_5 = (currentIndex_5 - 1 + slideCount_5) % slideCount_5;
    updateSlider_5();
}

function showNextSlide_5() {
    currentIndex_5 = (currentIndex_5 + 1) % slideCount_5;
    updateSlider_5();
}

function updateSlider_5() {
    slides_5.forEach((slide, index) => {
        if (index === currentIndex_5) {
            slide.classList.add('seen');
            updateDots_5(index);
        } else {
            slide.classList.remove('seen');
        }
    })
}

function updateDots_5(index) {
    for (let dot of dots_5) {
        dot.classList.remove('activ');
    }
    dots_5[index].classList.add('activ');
}

updateSlider_5();