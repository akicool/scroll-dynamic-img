const mainImg = document.querySelectorAll('.main__img-item');
const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', e => {
    const scrolled = document.documentElement.scrollTop / 10;
    for (let i = 0; i < mainImg.length; i++) {
        if (scrolled == 50) {
            mainImg[i].style.bottom = scrolled + 'px';
        } else if (scrolled > 0) {
            mainImg[i].style.bottom = scrolled - 50 + 'px';
        }
    }

    const offsetY = document.documentElement.scrollTop
    if (Math.floor(offsetY) >= 500) {
        buttonUp.classList.add('active')
    } else {
        buttonUp.classList.remove('active')
    }
        
    console.log(Math.floor(offsetY));
});

buttonUp.addEventListener('click', event => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
         })
});

