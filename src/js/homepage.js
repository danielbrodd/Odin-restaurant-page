import '../scss/style.scss';
import '../assets/css/style.css'
import icon from '../assets/coffee-02-stroke-rounded.svg'
import textContent from '../assets/text.txt'
import clearContent from './clearContent';
import * as bootstrap from 'bootstrap';


function loadHomePage() {
    let content = document.querySelector('#content');
    let elements = [];

    clearContent(content);
    // Create elements
    let title = document.createElement('h1');
    title.innerHTML = "Cafe D'Italia";
    elements.push(title)

    let logo = document.createElement('img');
    logo.src = icon;
    logo.alt = "Coffee";
    logo.id = "cup";
    elements.push(logo)

    let subContainer = document.createElement('div');
    let subContClasses = ['container','text-center','py-3','mx-auto'];
    subContClasses.forEach(c => {
        subContainer.classList.add(c)
    });
    elements.push(subContainer);

    let subContainerElements = [];

    let subTitle = document.createElement('h4');
    subTitle.innerHTML = "Hello";
    subContainerElements.push(subTitle);

    let p = document.createElement('p');
    let nestedh3 = document.createElement('h3');

    nestedh3.classList.add('capital');
    nestedh3.innerHTML = 'T';
    p.innerHTML = "his is an intro";
    p.prepend(nestedh3)

    subContainerElements.push(p);

    let preformat = document.createElement('pre');
    preformat.classList.add('text');
    preformat.innerHTML = textContent;
    subContainerElements.push(preformat);



    // Add elements to DOM
    elements.forEach(element => {
        content.appendChild(element)
    });
    subContainerElements.forEach(element => {
        subContainer.appendChild(element)
    });
}

export default loadHomePage