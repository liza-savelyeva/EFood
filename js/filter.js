let filter = function () {
    let filterNav = document.querySelectorAll('.filter-nav__item'),
    filterContent = document.querySelectorAll('.filter'),
    filterName;

    filterNav.forEach(item => {
        item.addEventListener('click',selectFilterNav)
    });

    function selectFilterNav() {
        filterNav.forEach(item => {
            item.classList.remove('is-active');
            filterImgWhite = item.querySelector('.filter-nav__img_white');
            filterImgBlack = item.querySelector('.filter-nav__img_black');
            filterImgWhite.classList.remove('is-active');
            filterImgBlack.classList.add('is-active');
        });
        this.classList.add('is-active');
        filterImgWhite = this.querySelector('.filter-nav__img_white');
        filterImgBlack = this.querySelector('.filter-nav__img_black');
        filterImgBlack.classList.remove('is-active');
        filterImgWhite.classList.add('is-active');
        filterName = this.getAttribute('data-filter-name');
        selectFilterContent(filterName);
    }

    function selectFilterContent(filterName) {
        filterContent.forEach(item => {
            item.classList.contains(filterName) ? item.classList.add('is-active'): item.classList.remove('is-active');
        })
    }
};

filter();