const reviewImg = document.querySelector('.review__container_img');
const reviewText = document.querySelector('.review__container_text');
const reviewPerson = document.querySelector('.review__container_person');
const btnPrev = document.querySelector('.review__nav-left');
const btnNext = document.querySelector('.review__nav-right');
const reviewImgSlides = Array.from(reviewImg.querySelectorAll('.review__item'));
const reviewTextSlides = Array.from(reviewText.querySelectorAll('.review__item'));
const reviewPersonSlides = Array.from(reviewPerson.querySelectorAll('.review__item'));
const reviewCount = reviewImgSlides.length;
let reviewIndex = 0;

btnPrev.addEventListener('click',reviewPrevious);
btnNext.addEventListener('click',reviewNext);

function reviewPrevious() {
    reviewIndex = (reviewIndex - 1 + reviewCount) % reviewCount;
    updateReview();
}

function reviewNext() {
    reviewIndex = (reviewIndex + 1) % reviewCount;
    updateReview();
}

function updateReview() {
    reviewImgSlides.forEach((slide, index) => {
        if (index === reviewIndex) {
            slide.classList.add('seen');
        } else {
            slide.classList.remove('seen');
        }
    })

    reviewTextSlides.forEach((slide, index) => {
        if (index === reviewIndex) {
            slide.classList.add('seen');
        } else {
            slide.classList.remove('seen');
        }
    })

    reviewPersonSlides.forEach((slide, index) => {
        if (index === reviewIndex) {
            slide.classList.add('seen');
        } else {
            slide.classList.remove('seen');
        }
    })
}

updateReview();