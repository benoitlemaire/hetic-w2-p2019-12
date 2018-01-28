export class Menu {
  constructor() {
  }

 toggleMenu () {
    let open = false; 
    const burger = document.querySelector('.menu__burgerIcon');
    const burgerContent = document.querySelector('.menu__burgerContent');
    const logo = document.querySelector('.menu__logo');

    burger.addEventListener('click', function () {
        if (open) {
            open = false;
            burger.classList.remove('--open');
            burgerContent.style.transform = 'translateX(-100%)';
            logo.style.transform = 'translateX(0)';
            console.log('close');
        }else {
            open = true;
            burger.classList.add('--open');
            burgerContent.style.transform = 'translateX(0)';
            logo.style.transform = 'translateX(-70%)';
            console.log('open');
        }
    })
  }
}
