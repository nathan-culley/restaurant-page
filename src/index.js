import addTabs from './tabs.js';
import addIntro from './intro-content.js';
import addMenu from './menu-section.js';
import addContact from './contact-section.js';
import './style.css';

const tabSection = document.getElementById('tab-section');
const content = document.getElementById('content');

function displayTabs() {  
    tabSection.HTMLcontent = addTabs();
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.onclick = displayHome;
    menuBtn.onclick = displayMenu;
    contactBtn.onclick = displayContact;

    return tabSection;  
}

function displayHome() {
    removeAllChildNodes(content);
    content.HTMLcontent = addIntro();

    return content;
}

function displayMenu() {
    removeAllChildNodes(content);
    content.HTMLcontent = addMenu();

    return content;
}

function displayContact() {
    removeAllChildNodes(content);
    content.HTMLcontent = addContact();

    return content;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

displayTabs();
displayHome();

