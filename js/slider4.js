const asian = document.querySelector('.asian');

const slider_4 = asian.querySelector('.slider__container');
const dots_4 = asian.querySelectorAll('.slider__dot');
const btnLeft_4 = asian.querySelector('.slider__nav-left');
const btnRight_4 = asian.querySelector('.slider__nav-right');
const slides_4 = Array.from(slider_4.querySelectorAll('.slider__item'));
const slideCount_4 = slides_4.length;
let currentIndex_4 = 0;

btnLeft_4.addEventListener('click',showPreviousSlide_4);
btnRight_4.addEventListener('click',showNextSlide_4);

function changeIndex_4(ind) {
    currentIndex_4 = ind;
    updateSlider_4(currentIndex_4);
}

function showPreviousSlide_4() {
    currentIndex_4 = (currentIndex_4 - 1 + slideCount_4) % slideCount_4;
    updateSlider_4();
}

function showNextSlide_4() {
    currentIndex_4 = (currentIndex_4 + 1) % slideCount_4;
    updateSlider_4();
}

function updateSlider_4() {
    slides_4.forEach((slide, index) => {
        if (index === currentIndex_4) {
            slide.classList.add('seen');
            updateDots_4(index);
        } else {
            slide.classList.remove('seen');
        }
    })
}

function updateDots_4(index) {
    for (let dot of dots_4) {
        dot.classList.remove('activ');
    }
    dots_4[index].classList.add('activ');
}

updateSlider_4();