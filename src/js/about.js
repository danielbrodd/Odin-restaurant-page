import clearContent from "./clearContent";

function loadAboutPage() {
    
    let content = document.querySelector('#content');
    clearContent(content);
    let elements = [];
    let h3 = document.createElement('h3');
    h3.innerHTML = "I made this";
    elements.push(h3);
    let p = document.createElement('p');
    p.classList.add('text');

    p.innerHTML = "Hello, I made this website. I did not create the logo or the menu. There is no coffee place, there is no coffee. There is only this website."
    elements.push(p);

    elements.forEach(element => {
        content.appendChild(element)
    });
}

export default loadAboutPage;