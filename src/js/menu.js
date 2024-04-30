import clearContent from "./clearContent";
import menuImage from '../assets/menu.png'

function loadMenuPage () {
    const content = document.querySelector('#content');
    clearContent(content);


    let menu = document.createElement('img');
    let outerMenu = document.createElement('div');
    outerMenu.classList.add('menuBorder');
    menu.src =  menuImage;
    menu.classList.add('menu');
    outerMenu.appendChild(menu);
    content.appendChild(outerMenu);

    let credit = document.createElement('em');
    credit.innerHTML= "menu design by:@aelinadesign [https://www.canva.com/p/aelinadesign/]"
    content.appendChild(credit);

}

export default loadMenuPage;