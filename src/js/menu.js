export class Menu {

 toggleMenu () {
    let open = false; 
    const burger = document.querySelector('.menu__burgerIcon--open');
    const burgerContent = document.querySelector('.menu__burgerContent');
    const logo = document.querySelector('.menu__logo');

    burger.addEventListener('click', function () {
        if (open) {
            open = false;
            burgerContent.style.transform = 'translateX(-100%)';
            burger.style.transform = 'translateX(0)';
            logo.style.transform = 'translateX(0)';
            console.log('close');
        }else {
            open = true;
            burgerContent.style.transform = 'translateX(0)';
            burger.style.transform = 'translateX(280%)';
            logo.style.transform = 'translateX(-70%)';
            console.log('open');
        }
    })
  }
}
