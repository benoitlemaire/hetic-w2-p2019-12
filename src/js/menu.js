export class Menu {
  constructor() {
    const burger = document.querySelector('.navigation__header__burgerIcon');
    let open = false; 
    const burgerContent = document.querySelector('.navigation__burgerContent');
    const logo = document.querySelector('.navigation__header__logo');

    burger.addEventListener('click', function () {
        if (open) {
            open = false;
            burger.classList.remove('is-open');
            burgerContent.style.transform = 'translateX(-100%)';
            logo.style.transform = 'translateX(0)';
            console.log('open');
        }else {
            open = true;
            burger.classList.add('is-open');
            burgerContent.style.transform = 'translateX(0)';
            logo.style.transform = 'translateX(-70%)';
            console.log('close');
        }
    })

  }
}
