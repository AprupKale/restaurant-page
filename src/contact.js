function display() {
    const content = document.createElement('div')
    content.id = 'content';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const number = document.createElement('h4');
    number.textContent = '+91 22749 83625'

    const email = document.createElement('h4');
    email.textContent = 'eat@epicurean.escape@gmail.com';

    const address = document.createElement('p');
    address.innerHTML = 'Epicurean Escape<br>123, Ocean View Avenue,<br>Colaba, South Mumbai,<br>Mumbai, Maharashtra,<br>India';

    const location = document.createElement('div');
    location.innerHTML = '<img src="../src/images/location.png">';

    content.appendChild(heading);
    content.appendChild(number);
    content.appendChild(email);
    content.appendChild(address);
    content.appendChild(location);
    return content;
}

export { display }