export class Menu {
  constructor() {
    let burger = document.querySelector('.navigation__burger');
    let open = false; 
    burger.addEventListener('click', function () {
        if (open) {
            open = false;
            burger.classList.remove('is-open');
        }else {
            open = true;
            burger.classList.add('is-open');
        }
    })

  }
}
