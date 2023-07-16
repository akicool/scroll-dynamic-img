const mainImg = document.querySelectorAll('.main__img-item');

window.addEventListener('scroll', e => {
    const scrolled = document.documentElement.scrollTop / 10;
    for (let i = 0; i < mainImg.length; i++) {
        if (scrolled == 50) {
            mainImg[i].style.bottom = scrolled + 'px';
        } else if (scrolled > 0) {
            mainImg[i].style.bottom = scrolled - 50 + 'px';
        }
    }

    //console.log(scrolled)

});

