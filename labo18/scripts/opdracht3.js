const setup = () => {
    let button = document.getElementById("buttonDIV");

    const addPElement = () => {
        let element = document.createElement('p');
        element.textContent = 'Dit is een nieuwe paragraaf.';
        document.getElementById('myDIV').appendChild(element);
    }

    button.addEventListener('click', addPElement);

}
window.addEventListener("load", setup);