import '../scss/style.scss';
import '../assets/css/style.css'
import * as bootstrap from 'bootstrap';
import loadHomePage from './homepage';
import loadMenuPage from './menu';
import loadAboutPage from './about';

loadHomePage()


const eventlisteners = (() => {
    const homeBtn = document.querySelector('#Home');
    homeBtn.addEventListener('click', () => loadHomePage());

    const menuBtn = document.querySelector('#Menu');
    menuBtn.addEventListener('click', () => loadMenuPage());

    const aboutBtn = document.querySelector('#About');
    aboutBtn.addEventListener('click', () => loadAboutPage());
})();