import './style.css';
import {display as displayHome} from './home.js';
import {display as displayMenu} from './menu.js';
import {display as displayContact} from './contact.js';

function displayNavigationBar () {
    const navigationBar = document.createElement('div');
    navigationBar.id = 'navigation-bar';

    const home = document.createElement('button');
    home.id = 'home';
    home.textContent = 'Home';

    const menu = document.createElement('button');
    menu.id = 'menu';
    menu.textContent = 'Menu';

    const contact = document.createElement('button');
    contact.id = 'contact';
    contact.textContent = 'Contact Us';

    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact);

    navigationBar.appendChild(home);
    navigationBar.appendChild(menu);
    navigationBar.appendChild(contact);

    return navigationBar;
}

function loadHome () {
    document.body.innerHTML = '';
    document.body.appendChild(displayNavigationBar());
    document.body.appendChild(displayHome());
}

function loadMenu () {
    document.body.innerHTML = '';
    document.body.appendChild(displayNavigationBar());
    document.body.appendChild(displayMenu());
}

function loadContact () {
    document.body.innerHTML = '';
    document.body.appendChild(displayNavigationBar());
    document.body.appendChild(displayContact());
}

loadHome();