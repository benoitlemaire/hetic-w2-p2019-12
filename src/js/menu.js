export class Menu {

    constructor () {
        // @TODO use le this des class et mettre les const dans le selector
    }

 toggleMenu () {
    let openBurger = false; 
    const burger = document.querySelector('.menu__burgerIcon--open');
    const burgerContent = document.querySelector('.menu__burgerContent');

    burger.addEventListener('click', function () {
        if (openBurger) {
            openBurger = false;
            burgerContent.style.transform = 'translateX(-100%)';
        }else {
            openBurger = true;
            burgerContent.style.transform = 'translateX(0)';
        }
    })
  }

  // toggleSelect () {
  //   const select = document.querySelector('.menu__list');
  //   const hidden = document.querySelector('.menu__list--hiden');
  //   let openSelect = false; 

  //   select.addEventListener('click', function () {
  //       if (openSelect) {
  //           openSelect = false;
  //           hidden.style.display = 'none';
  //           console.log('close');
  //       }else {
  //           openSelect = true;
  //           hidden.style.display = 'block';
  //           console.log('open');
  //       }
        
  //   })
  // }
}
